# Smart Salon SaaS

A Next.js salon dashboard with an initial PostgreSQL-backed account and appointment foundation.

## Local setup

Requirements: Node.js 18.17+ and a PostgreSQL database.

1. Copy `.env.example` to `.env` and set `DATABASE_URL` to your PostgreSQL connection string.
2. Generate a strong application secret, for example with `openssl rand -base64 32`, and set it as `NEXTAUTH_SECRET`. Set `NEXTAUTH_URL=http://localhost:3000` for local development.
3. Install dependencies with `npm install`.
4. Generate the Prisma client and create the database schema with `npm run db:generate` and `npm run db:migrate`.
5. Start the app using `npm run dev`, then visit `http://localhost:3000/register` to create the first salon owner account.

## Included foundation

- Credentials sign-in with bcrypt password hashing and JWT sessions.
- Registration creates a user, salon, and owner membership in a database transaction.
- Middleware protects dashboard and API routes; appointment endpoints additionally verify the session and scope reads/writes to the current user's salon.
- PostgreSQL/Prisma schema for salons, memberships, customers, staff, services, and appointments.
- Appointment GET/POST API with input validation.

## Production readiness still required

This is an initial backend foundation, not a fully production-ready SaaS. Dashboard cards still use illustrative data and the UI has not yet been connected to the appointment API. Before public launch, configure HTTPS and a real PostgreSQL service, add email verification and password reset, rate limiting/bot protection for registration and login, audit logging, backups, monitoring, and security review. Add database migrations to deployment, review data retention/privacy obligations, and test the complete sign-in and booking flows. Do not treat demo metrics as live business data.
