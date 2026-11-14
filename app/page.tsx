"use client";

import { useMemo, useState } from "react";
import { appointmentsSeed, serviceOptions, staffMembers, statsSeed } from "@/lib/mockData";

type StatusFilter = "all" | "upcoming" | "completed";

export default function HomePage() {
  const [appointments, setAppointments] = useState(appointmentsSeed);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    client: "",
    service: serviceOptions[0],
    staff: staffMembers[0].name,
    time: "10:30",
    amount: "85",
  });

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const matchesStatus = statusFilter === "all" || appointment.status === statusFilter;
      const matchesSearch =
        search.trim() === "" ||
        [appointment.client, appointment.service, appointment.staff].join(" ").toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [appointments, search, statusFilter]);

  const revenueValue = useMemo(
    () => appointments.reduce((total, item) => total + item.amount, 0),
    [appointments]
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextAppointment = {
      id: `${Date.now()}`,
      client: form.client,
      service: form.service,
      staff: form.staff,
      time: form.time,
      amount: Number(form.amount),
      status: "upcoming",
    };

    setAppointments((current) => [nextAppointment, ...current]);
    setForm({
      client: "",
      service: serviceOptions[0],
      staff: staffMembers[0].name,
      time: "10:30",
      amount: "85",
    });
    setShowForm(false);
    setStatusFilter("all");
  };

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">S</div>
          <div>
            <span className="brand-label">Salon</span>
            <h1>SmartFlow</h1>
          </div>
        </div>

        <div className="studio-card">
          <div className="studio-avatar">B</div>
          <div>
            <strong>Bloom Studio</strong>
            <small>Downtown location</small>
          </div>
        </div>

        <nav className="nav">
          <span className="nav-title">Workspace</span>
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Appointments</button>
          <button className="nav-item">Services</button>
          <button className="nav-item">Team</button>
          <button className="nav-item">Clients</button>
          <button className="nav-item">Reports</button>
        </nav>

        <div className="help-card">
          <span className="spark">✦</span>
          <strong>Need a hand?</strong>
          <p>Visit the help center for salon tips and support.</p>
          <a href="#">Get support →</a>
        </div>

        <div className="profile-box">
          <div className="mini-avatar">AL</div>
          <div>
            <strong>Alicia Lee</strong>
            <small>Owner</small>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <span className="eyebrow">Bloom Studio / Overview</span>
            <h2>Dashboard</h2>
          </div>

          <div className="top-actions">
            <label className="search-box">
              <span>⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search appointments"
                aria-label="Search appointments"
              />
            </label>
            <button className="icon-btn" aria-label="Notifications">🔔</button>
            <button className="primary-btn" onClick={() => setShowForm(true)}>
              + New appointment
            </button>
          </div>
        </header>

        <section className="hero-row">
          <div>
            <p className="eyebrow">Tuesday, June 18</p>
            <h3>Good morning, Alicia</h3>
            <p className="subtext">Here’s what’s happening at your salon today.</p>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card highlight">
            <div className="card-head">
              <span>Today’s revenue</span>
              <span className="chip success">+12.8%</span>
            </div>
            <strong>${revenueValue.toLocaleString()}</strong>
            <small>Compared to yesterday</small>
          </article>

          <article className="stat-card">
            <div className="card-head">
              <span>Appointments</span>
              <span className="chip success">+8.3%</span>
            </div>
            <strong>{appointments.length}</strong>
            <small>8 completed · 10 upcoming</small>
          </article>

          <article className="stat-card">
            <div className="card-head">
              <span>New clients</span>
              <span className="chip neutral">+2</span>
            </div>
            <strong>6</strong>
            <small>First-time visitors today</small>
          </article>

          <article className="stat-card">
            <div className="card-head">
              <span>Capacity</span>
              <span className="chip neutral">On track</span>
            </div>
            <strong>76%</strong>
            <small>14 of 18 slots booked</small>
          </article>
        </section>

        <section className="panel-grid">
          <article className="panel card-panel">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Business</span>
                <h4>Revenue overview</h4>
              </div>
              <select defaultValue="This week">
                <option>This week</option>
                <option>This month</option>
                <option>This year</option>
              </select>
            </div>

            <div className="chart-total">
              <strong>$8,492</strong>
              <span className="chip success">+10.4%</span>
            </div>

            <div className="mini-chart" aria-label="weekly revenue chart">
              {[38, 54, 46, 72, 63, 81, 58].map((bar, index) => (
                <div key={index} className="bar-stack">
                  <span style={{ height: `${bar}%` }} />
                  <small>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="panel card-panel">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Popular</span>
                <h4>Top services</h4>
              </div>
              <button className="ghost-btn">This week</button>
            </div>

            <div className="service-list">
              {[
                { name: "Signature haircut", bookings: 42, revenue: "$2,184", tone: "purple" },
                { name: "Balayage color", bookings: 28, revenue: "$1,960", tone: "gold" },
                { name: "Gel manicure", bookings: 36, revenue: "$1,080", tone: "green" },
                { name: "Glow facial", bookings: 19, revenue: "$950", tone: "blue" },
              ].map((service) => (
                <div key={service.name} className="service-row">
                  <span className={`service-badge ${service.tone}`}>✦</span>
                  <div>
                    <strong>{service.name}</strong>
                    <small>{service.bookings} bookings</small>
                  </div>
                  <span>{service.revenue}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="panel appointments-panel">
          <div className="panel-head appointments-head">
            <div>
              <span className="eyebrow">Salon schedule</span>
              <h4>Today’s appointments</h4>
            </div>

            <div className="appointment-actions">
              <div className="filter-group">
                {(["all", "upcoming", "completed"] as StatusFilter[]).map((filter) => (
                  <button
                    key={filter}
                    className={`filter-btn ${statusFilter === filter ? "active" : ""}`}
                    onClick={() => setStatusFilter(filter)}
                  >
                    {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Service</th>
                  <th>Team member</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>
                      <div className="client-cell">
                        <span className="client-avatar">{appointment.client.slice(0, 2).toUpperCase()}</span>
                        <span>{appointment.client}</span>
                      </div>
                    </td>
                    <td>{appointment.service}</td>
                    <td>{appointment.staff}</td>
                    <td>{appointment.time}</td>
                    <td>
                      <span className={`status-pill ${appointment.status}`}>
                        {appointment.status === "completed" ? "Completed" : "Upcoming"}
                      </span>
                    </td>
                    <td>${appointment.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredAppointments.length === 0 && <p className="empty-state">No appointments match this filter.</p>}
          </div>
        </section>
      </main>

      {showForm && (
        <div className="modal-backdrop" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <span className="eyebrow">Quick add</span>
                <h4>New appointment</h4>
              </div>
              <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form">
              <label>
                Client name
                <input
                  value={form.client}
                  onChange={(event) => setForm((current) => ({ ...current, client: event.target.value }))}
                  placeholder="Jamie Parker"
                  required
                />
              </label>

              <div className="two-col">
                <label>
                  Service
                  <select
                    value={form.service}
                    onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Staff member
                  <select
                    value={form.staff}
                    onChange={(event) => setForm((current) => ({ ...current, staff: event.target.value }))}
                  >
                    {staffMembers.map((member) => (
                      <option key={member.name} value={member.name}>
                        {member.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="two-col">
                <label>
                  Time
                  <input
                    type="time"
                    value={form.time}
                    onChange={(event) => setForm((current) => ({ ...current, time: event.target.value }))}
                    required
                  />
                </label>

                <label>
                  Amount
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.amount}
                    onChange={(event) => setForm((current) => ({ ...current, amount: event.target.value }))}
                    required
                  />
                </label>
              </div>

              <button type="submit" className="primary-btn full-width">
                Save appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
