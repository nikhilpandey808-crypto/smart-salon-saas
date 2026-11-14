export const runtime = "edge";

import { appointmentsSeed } from "@/lib/mockData";

export async function GET() {
  return Response.json({ appointments: appointmentsSeed });
}

export async function POST(request: Request) {
  const payload = await request.json();

  const appointment = {
    id: `${Date.now()}`,
    client: payload.client,
    service: payload.service,
    staff: payload.staff,
    time: payload.time,
    amount: Number(payload.amount || 0),
    status: "upcoming",
  };

  return Response.json({ appointment }, { status: 201 });
}
