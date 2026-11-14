export const statsSeed = [
  { label: "Revenue", value: 1284 },
  { label: "Appointments", value: 18 },
  { label: "New clients", value: 6 },
  { label: "Capacity", value: 76 },
];

export const serviceOptions = [
  "Signature haircut",
  "Balayage color",
  "Gel manicure",
  "Glow facial",
  "Bridal package",
  "Luxury blowout",
];

export const staffMembers = [
  { name: "Maya Chen", role: "Hair styling" },
  { name: "Lena Ortiz", role: "Color specialist" },
  { name: "Ella Brooks", role: "Nail artist" },
  { name: "Nia Morris", role: "Skin care" },
];

export type Appointment = {
  id: string;
  client: string;
  service: string;
  staff: string;
  time: string;
  amount: number;
  status: "upcoming" | "completed";
};

export const appointmentsSeed: Appointment[] = [
  { id: "1", client: "Jade Miller", service: "Signature haircut", staff: "Maya Chen", time: "10:30 AM", amount: 52, status: "upcoming" },
  { id: "2", client: "Sofia Kim", service: "Balayage color", staff: "Lena Ortiz", time: "11:15 AM", amount: 140, status: "upcoming" },
  { id: "3", client: "Amara Ross", service: "Gel manicure", staff: "Ella Brooks", time: "09:00 AM", amount: 48, status: "completed" },
  { id: "4", client: "Nina Patel", service: "Glow facial", staff: "Nia Morris", time: "12:00 PM", amount: 85, status: "upcoming" },
  { id: "5", client: "Riley Hart", service: "Bridal package", staff: "Maya Chen", time: "01:30 PM", amount: 220, status: "upcoming" },
];
