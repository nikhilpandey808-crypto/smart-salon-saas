import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const signupSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  salonName: z.string().trim().min(2).max(100),
  password: z.string().min(12).max(72),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON request." }, { status: 400 });
  }

  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Please provide a name, valid email, salon name, and a password of 12–72 characters." },
      { status: 400 }
    );
  }

  const email = parsed.data.email.toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) return Response.json({ error: "An account with this email already exists." }, { status: 409 });

  try {
    const passwordHash = await hash(parsed.data.password, 12);
    const user = await prisma.$transaction(async (transaction) => {
      const createdUser = await transaction.user.create({
        data: { name: parsed.data.name, email, passwordHash },
        select: { id: true, name: true, email: true },
      });
      const salon = await transaction.salon.create({ data: { name: parsed.data.salonName } });
      await transaction.salonMember.create({
        data: { userId: createdUser.id, salonId: salon.id, role: "OWNER" },
      });
      return createdUser;
    });

    return Response.json({ user }, { status: 201 });
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === "P2002") {
      return Response.json({ error: "An account with this email already exists." }, { status: 409 });
    }
    console.error("Account registration failed", error);
    return Response.json({ error: "Could not create the account. Please try again." }, { status: 500 });
  }
}
