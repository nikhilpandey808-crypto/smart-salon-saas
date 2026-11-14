import type { CapacitorConfig } from "@capacitor/cli";

const appUrl = process.env.CAPACITOR_SERVER_URL;

if (appUrl && !appUrl.startsWith("https://")) {
  throw new Error("CAPACITOR_SERVER_URL must use HTTPS for Android builds.");
}

const config: CapacitorConfig = {
  appId: "com.smartflow.salon",
  appName: "SmartFlow Salon",
  webDir: "www",
  ...(appUrl ? { server: { url: appUrl, cleartext: false } } : {}),
};

export default config;
