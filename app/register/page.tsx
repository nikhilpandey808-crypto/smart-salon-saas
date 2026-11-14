"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Could not create your account.");
        setBusy(false);
        return;
      }
      const login = await signIn("credentials", {
        email: String(payload.email),
        password: String(payload.password),
        callbackUrl: "/",
        redirect: false,
      });
      if (login?.error) setError("Account created. Please sign in to continue.");
      else window.location.assign(login?.url || "/");
    } catch {
      setError("Unable to reach the server. Please try again.");
    }
    setBusy(false);
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand"><span className="brand-mark">S</span><strong>SmartFlow</strong></div>
        <p className="eyebrow">GET STARTED</p>
        <h1>Create your salon account</h1>
        <p className="auth-description">Set up an owner account and your salon workspace.</p>
        <form className="auth-form" onSubmit={submit}>
          <label>Your name<input name="name" autoComplete="name" required minLength={2} maxLength={80} /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label>Salon name<input name="salonName" required minLength={2} maxLength={100} /></label>
          <label>Password<input name="password" type="password" autoComplete="new-password" required minLength={12} maxLength={72} /><small>Use at least 12 characters.</small></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-btn full-width" type="submit" disabled={busy}>{busy ? "Creating account…" : "Create account"}</button>
        </form>
        <p className="auth-switch">Already have an account? <Link href="/login">Sign in</Link></p>
      </section>
    </main>
  );
}
