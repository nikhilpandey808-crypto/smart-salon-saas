"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      callbackUrl: "/",
      redirect: false,
    });
    setBusy(false);
    if (result?.error) setError("Email or password is incorrect.");
    else window.location.assign(result?.url || "/");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand"><span className="brand-mark">S</span><strong>SmartFlow</strong></div>
        <p className="eyebrow">SALON MANAGEMENT</p>
        <h1>Welcome back</h1>
        <p className="auth-description">Sign in to manage your salon.</p>
        <form className="auth-form" onSubmit={submit}>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label>Password<input name="password" type="password" autoComplete="current-password" required maxLength={128} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-btn full-width" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        </form>
        <p className="auth-switch">New to SmartFlow? <Link href="/register">Create an account</Link></p>
      </section>
    </main>
  );
}
