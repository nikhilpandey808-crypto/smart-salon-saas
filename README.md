# SmartFlow salon dashboard

A responsive, browser-only admin dashboard prototype for a salon. It uses plain HTML, CSS, and JavaScript—there is no build step or server required.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

The dashboard uses Google Fonts when a network connection is available and falls back to local system fonts otherwise.

## Included

- Responsive salon overview with revenue, appointment, client, and capacity cards.
- Revenue chart and top-services panel (illustrative sample data).
- Appointment search and upcoming/completed filters.
- Quick-add appointment form. New demo bookings are saved in the current browser's `localStorage` and appear in the appointment table.

## Important limitations

This is a frontend demo, not a production SaaS application. The displayed business figures and existing appointments are sample data. New bookings are stored only in the browser that created them; there is no login, shared database, server-side validation, authorization, payment processing, or live booking integration. Do not use it to store real customer data. A production deployment needs a backend, secure authentication, a database, and appropriate privacy/security controls.
