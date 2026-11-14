import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createAppointmentSchema = z.object({
  client: z.string().trim().min(2).max(100),
  service: z.string().trim().min(2).max(100),
  staff: z.string().trim().min(2).max(100),
  time: z.string().trim().min(1).max(40),
  amount: z.coerce.number().finite().min(0).max(100000),
  date: z.string().datetime().optional(),
});

async function getSalonId(userId: string) {
  const membership = await prisma.salonMember.findFirst({
    where: { userId },
    select: { salonId: true },
    orderBy: { createdAt: "asc" },
  });
  return membership?.salonId ?? null;
}

function parseStartTime(time: string, date?: string) {
  if (date) return new Date(date);
  const match = time.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
  if (!match) return null;
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (minutes > 59 || hours > 23) return null;
  if (match[3]) {
    if (hours < 1 || hours > 12) return null;
    hours = (hours % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0);
  }
  const start = new Date();
  start.setHours(hours, minutes, 0, 0);
  return start;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const salonId = await getSalonId(session.user.id);
  if (!salonId) return Response.json({ appointments: [] });

  const appointments = await prisma.appointment.findMany({
    where: { salonId },
    include: { customer: true, staff: true, service: true },
    orderBy: { startsAt: "asc" },
    take: 100,
  });

  return Response.json({
    appointments: appointments.map((item) => ({
      id: item.id,
      client: item.customer.name,
      service: item.service.name,
      staff: item.staff.name,
      time: item.startsAt.toISOString(),
      amount: item.amountCents / 100,
      status: item.status.toLowerCase(),
    })),
  });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return Response.json({ error: "Unauthorized" }, { status: 401 });

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON request." }, { status: 400 });
  }

  const parsed = createAppointmentSchema.safeParse(payload);
  if (!parsed.success) return Response.json({ error: "Appointment details are invalid." }, { status: 400 });

  const salonId = await getSalonId(session.user.id);
  if (!salonId) return Response.json({ error: "Salon membership not found." }, { status: 403 });

  const startsAt = parseStartTime(parsed.data.time, parsed.data.date);
  if (!startsAt || Number.isNaN(startsAt.getTime())) {
    return Response.json({ error: "Time must be a valid time such as 10:30 AM." }, { status: 400 });
  }

  try {
    const appointment = await prisma.$transaction(async (transaction) => {
      const customer = await transaction.customer.create({
        data: { salonId, name: parsed.data.client },
      });
      const staff = await transaction.staffMember.upsert({
        where: { salonId_name: { salonId, name: parsed.data.staff } },
        update: {},
        create: { salonId, name: parsed.data.staff },
      });
      const service = await transaction.service.upsert({
        where: { salonId_name: { salonId, name: parsed.data.service } },
        update: {},
        create: { salonId, name: parsed.data.service, priceCents: Math.round(parsed.data.amount * 100) },
      });
      const durationMinutes = service.durationMinutes || 60;
      return transaction.appointment.create({
        data: {
          salonId,
          customerId: customer.id,
          staffId: staff.id,
          serviceId: service.id,
          startsAt,
          endsAt: new Date(startsAt.getTime() + durationMinutes * 60_000),
          amountCents: Math.round(parsed.data.amount * 100),
        },
        include: { customer: true, staff: true, service: true },
      });
    });

    return Response.json({
      appointment: {
        id: appointment.id,
        client: appointment.customer.name,
        service: appointment.service.name,
        staff: appointment.staff.name,
        time: appointment.startsAt.toISOString(),
        amount: appointment.amountCents / 100,
        status: appointment.status.toLowerCase(),
      },
    }, { status: 201 });
  } catch (error) {
    console.error("Appointment creation failed", error);
    return Response.json({ error: "Could not create appointment." }, { status: 500 });
  }
}
