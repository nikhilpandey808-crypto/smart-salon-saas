# Smart Salon SaaS

A Next.js salon dashboard with an initial PostgreSQL-backed account and appointment foundation, plus a Capacitor Android wrapper scaffold.

## Web app setup

Requirements: Node.js 18.17+ and a PostgreSQL database.

1. Copy `.env.example` to `.env` and set `DATABASE_URL` to your PostgreSQL connection string.
2. Generate a strong application secret, for example with `openssl rand -base64 32`, and set it as `NEXTAUTH_SECRET`. Set `NEXTAUTH_URL=http://localhost:3000` for local development.
3. Install dependencies with `npm install`.
4. Generate the Prisma client and create the database schema with `npm run db:generate` and `npm run db:migrate`.
5. Start with `npm run dev`, then visit `http://localhost:3000/register` to create the first salon owner account.

## Android wrapper setup

The Android wrapper loads the deployed web app; it does not bundle the Next.js server. The app needs a publicly reachable HTTPS deployment and a configured production database before it can work on a phone. Do not use a localhost URL as the Android app's server URL.

1. Deploy the web app and complete the production environment/database setup first. Verify login, registration, and appointment API flows in a mobile browser.
2. Set `CAPACITOR_SERVER_URL` in your local shell to the deployed HTTPS origin (for example `https://your-domain.example`). Do not include `/login` or another page path.
3. Install dependencies: `npm install`.
4. Generate the Android project once: `npm run android:init`.
5. Sync the wrapper: `npm run android:sync`.
6. Open it in Android Studio: `npm run android:open`.
7. In Android Studio, use **Build > Build Bundle(s) / APK(s) > Build APK(s)** for a test APK. For Play Store, create a signed Android App Bundle (`.aab`) and follow Play Console's current testing and listing requirements.

Requirements for building: Android Studio with its Android SDK, a compatible JDK, and an Android device/emulator for testing. The wrapper requires internet access and shows a fallback message if the deployed site is unavailable. Keep production credentials and signing keys private; do not commit them.

## Important status and limitations

This commit adds the Capacitor configuration and instructions, not a generated/signed APK. The Android project must be generated locally after setting the deployed HTTPS URL; this repository cannot produce an installable APK until that is done. The app is still an initial SaaS foundation: complete security review, production database migrations/backups, email verification, password recovery, rate limiting, privacy policy, and device testing before public launch. The dashboard still contains illustrative sample metrics.
