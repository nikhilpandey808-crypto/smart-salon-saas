<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smart Salon SaaS — Admin Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">S</div>
          <div>
            <p class="eyebrow">Salon</p>
            <h1>SmartFlow</h1>
          </div>
        </div>

        <nav class="nav">
          <p class="nav-label">Overview</p>
          <a class="nav-item active" href="#">
            <span>Dashboard</span>
            <span class="badge badge-lite">Live</span>
          </a>
          <a class="nav-item" href="#">Appointments</a>
          <a class="nav-item" href="#">Services</a>
          <a class="nav-item" href="#">Staff</a>
          <a class="nav-item" href="#">Customers</a>
          <a class="nav-item" href="#">Inventory</a>
          <a class="nav-item" href="#">Reports</a>
        </nav>

        <div class="sidebar-card">
          <p class="card-kicker">This week</p>
          <h3>+18.4%</h3>
          <p>Bookings compared to last week.</p>
        </div>
      </aside>

      <main class="main-content">
        <header class="topbar">
          <div>
            <p class="eyebrow">Good afternoon</p>
            <h2>Admin dashboard</h2>
          </div>

          <div class="topbar-actions">
            <label class="search-box" aria-label="Search">
              <span>⌕</span>
              <input type="text" placeholder="Search bookings, services..." />
            </label>
            <button class="icon-btn" aria-label="Notifications">🔔</button>
            <div class="user-pill">
              <div class="avatar">AL</div>
              <div>
                <strong>Alicia</strong>
                <small>Owner</small>
              </div>
            </div>
          </div>
        </header>

        <section class="stats-grid">
          <article class="stat-card primary">
            <div class="stat-header">
              <span class="stat-label">Revenue</span>
              <span class="trend up">↑ 12.8%</span>
            </div>
            <h3>$24,860</h3>
            <small>Compared to last month</small>
          </article>

          <article class="stat-card">
            <div class="stat-header">
              <span class="stat-label">Appointments</span>
              <span class="trend up">↑ 8.3%</span>
            </div>
            <h3>1,284</h3>
            <small>8 booked today</small>
          </article>

          <article class="stat-card">
            <div class="stat-header">
              <span class="stat-label">New clients</span>
              <span class="trend down">↓ 2.1%</span>
            </div>
            <h3>186</h3>
            <small>32 active this week</small>
          </article>

          <article class="stat-card">
            <div class="stat-header">
              <span class="stat-label">Conversion</span>
              <span class="trend up">↑ 5.9%</span>
            </div>
            <h3>71%</h3>
            <small>From website leads</small>
          </article>
        </section>

        <section class="content-grid">
          <article class="panel chart-panel">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Performance</p>
                <h3>Bookings by week</h3>
              </div>
              <button class="ghost-btn">This month</button>
            </div>

            <div class="chart" id="bookingChart" aria-label="Booking chart"></div>
          </article>

          <article class="panel">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Today</p>
                <h3>Schedule</h3>
              </div>
              <button class="ghost-btn">View all</button>
            </div>

            <div class="schedule-list">
              <div class="time-block">
                <span class="time">09:00</span>
                <div>
                  <strong>Haircut + wash</strong>
                  <small>Emma R. • Maya</small>
                </div>
              </div>
              <div class="time-block">
                <span class="time">11:30</span>
                <div>
                  <strong>Facial treatment</strong>
                  <small>Laura M. • Zoe</small>
                </div>
              </div>
              <div class="time-block">
                <span class="time">13:00</span>
                <div>
                  <strong>Manicure</strong>
                  <small>Priya S. • Elena</small>
                </div>
              </div>
              <div class="time-block">
                <span class="time">15:45</span>
                <div>
                  <strong>Bridal package</strong>
                  <small>Melissa T. • Olivia</small>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section class="bottom-grid">
          <article class="panel table-panel">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Appointments</p>
                <h3>Recent bookings</h3>
              </div>
              <div class="filter-row" aria-label="Appointment filters">
                <button class="chip active" data-filter="all">All</button>
                <button class="chip" data-filter="confirmed">Confirmed</button>
                <button class="chip" data-filter="pending">Pending</button>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Staff</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr data-status="confirmed">
                  <td>Sarah M.</td>
                  <td>Classic cut</td>
                  <td>Maya</td>
                  <td>Today, 09:00</td>
                  <td><span class="status confirmed">Confirmed</span></td>
                  <td>$48</td>
                </tr>
                <tr data-status="pending">
                  <td>Grace T.</td>
                  <td>Bridal makeup</td>
                  <td>Olivia</td>
                  <td>Today, 10:30</td>
                  <td><span class="status pending">Pending</span></td>
                  <td>$140</td>
                </tr>
                <tr data-status="confirmed">
                  <td>Jasmine W.</td>
                  <td>Luxury facial</td>
                  <td>Zoe</td>
                  <td>Today, 13:15</td>
                  <td><span class="status confirmed">Confirmed</span></td>
                  <td>$92</td>
                </tr>
                <tr data-status="pending">
                  <td>Kimberly P.</td>
                  <td>Gel manicure</td>
                  <td>Elena</td>
                  <td>Today, 15:00</td>
                  <td><span class="status pending">Pending</span></td>
                  <td>$38</td>
                </tr>
                <tr data-status="confirmed">
                  <td>Amelia C.</td>
                  <td>Hair color</td>
                  <td>Maya</td>
                  <td>Tomorrow, 09:45</td>
                  <td><span class="status confirmed">Confirmed</span></td>
                  <td>$120</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article class="panel staff-panel">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Staff</p>
                <h3>Performance</h3>
              </div>
            </div>

            <div class="staff-list">
              <div class="staff-item">
                <div class="person">
                  <div class="avatar small pink">M</div>
                  <div>
                    <strong>Maya</strong>
                    <small>Hair styling</small>
                  </div>
                </div>
                <span class="score">92%</span>
              </div>
              <div class="staff-item">
                <div class="person">
                  <div class="avatar small green">Z</div>
                  <div>
                    <strong>Zoe</strong>
                    <small>Skin care</small>
                  </div>
                </div>
                <span class="score">89%</span>
              </div>
              <div class="staff-item">
                <div class="person">
                  <div class="avatar small blue">E</div>
                  <div>
                    <strong>Elena</strong>
                    <small>Nails</small>
                  </div>
                </div>
                <span class="score">86%</span>
              </div>
              <div class="staff-item">
                <div class="person">
                  <div class="avatar small purple">O</div>
                  <div>
                    <strong>Olivia</strong>
                    <small>Makeup</small>
                  </div>
                </div>
                <span class="score">94%</span>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>

    <script src="app.js"></script>
  </body>
</html>
"},{"content":":root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --panel-alt: #f1f4ff;
  --line: #e8ebf3;
  --text: #1b2433;
  --muted: #687385;
  --primary: #5d5fef;
  --primary-strong: #494ce0;
  --primary-soft: #edf0ff;
  --success: #18b26b;
  --success-soft: #e9fbf2;
  --warning: #ffb648;
  --warning-soft: #fff3dc;
  --danger: #f15555;
  --danger-soft: #ffe8e8;
  --shadow: 0 12px 34px rgba(31, 41, 55, 0.08);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f7f8ff 0%, #f3f6fb 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  background: #12172a;
  color: #edf2ff;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6a6ef4, #8d75ff);
  font-weight: 800;
}

.brand h1,
.topbar h2,
.panel h3,
.stat-card h3 {
  margin: 0;
}

.eyebrow {
  color: var(--muted);
  margin: 0 0 6px;
  font-size: 11px;
  line-height: 1.1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.sidebar .eyebrow {
  color: rgba(237, 242, 255, 0.7);
}

.nav {
  display: grid;
  gap: 6px;
}

.nav-label {
  color: rgba(237, 242, 255, 0.6);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 12px;
  color: rgba(237, 242, 255, 0.82);
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.badge {
  display: inline-flex;
  padding: 4px 7px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}

.badge-lite {
  background: rgba(93, 95, 239, 0.18);
  color: #bfd0ff;
}

.sidebar-card {
  background: linear-gradient(180deg, rgba(108, 97, 255, 0.22), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 18px 16px;
  margin-top: auto;
}

.sidebar-card h3 {
  margin: 8px 0;
  font-size: 2rem;
}

.sidebar-card p {
  margin: 0;
  color: rgba(237, 242, 255, 0.7);
  line-height: 1.5;
}

.main-content {
  padding: 28px 30px 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 26px;
}

.topbar h2 {
  font-size: clamp(1.7rem, 2.4vw, 2.5rem);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 280px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--line);
  padding: 10px 14px;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.03);
}

.search-box input {
  border: 0;
  outline: none;
  width: 100%;
  background: transparent;
  color: var(--text);
}

.icon-btn, .ghost-btn, .chip {
  border: 0;
  cursor: pointer;
}

.icon-btn {
  width: 42px;
  height: 42px;
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.user-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 8px 12px;
}

.user-pill strong,
.user-pill small {
  display: block;
}

.user-pill small {
  color: var(--muted);
}

.avatar {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd5d0, #e2d7ff);
  color: #1c1b28;
  font-size: 0.8rem;
  font-weight: 700;
}

.avatar.small {
  width: 32px;
  height: 32px;
  font-size: 0.72rem;
}

.avatar.pink { background: linear-gradient(135deg, #ffd8e3, #ffc9c9); }
.avatar.green { background: linear-gradient(135deg, #dff8e6, #b8efbb); }
.avatar.blue { background: linear-gradient(135deg, #def7ff, #bfdcff); }
.avatar.purple { background: linear-gradient(135deg, #f1e4ff, #d9d0ff); }

.stats-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 28px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 18px 20px;
}

.stat-card.primary {
  background: linear-gradient(135deg, #595ef0 0%, #7a6cfb 100%);
  color: white;
}

.stat-card.primary .stat-label,
.stat-card.primary small,
.stat-card.primary .trend {
  color: rgba(255, 255, 255, 0.86);
}

.stat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.stat-label {
  color: var(--muted);
  font-size: 0.86rem;
}

.trend {
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 6px 8px;
}

.trend.up {
  background: var(--success-soft);
  color: var(--success);
}

.trend.down {
  background: var(--danger-soft);
  color: var(--danger);
}

.stat-card h3 {
  margin-top: 16px;
  font-size: clamp(1.8rem, 2.4vw, 2.35rem);
  line-height: 1.1;
}

.stat-card small {
  display: block;
  color: var(--muted);
  margin-top: 8px;
}

.content-grid,
.bottom-grid {
  display: grid;
  gap: 22px;
}

.content-grid {
  grid-template-columns: 1.7fr 1fr;
  margin-bottom: 22px;
}

.bottom-grid {
  grid-template-columns: 1.9fr 1fr;
}

.panel {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 20px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
}

.panel-header h3 {
  font-size: 1.35rem;
}

.ghost-btn {
  background: var(--primary-soft);
  color: var(--primary);
  padding: 9px 12px;
  border-radius: 10px;
  font-weight: 600;
}

.chart {
  width: 100%;
  height: 220px;
  background: linear-gradient(180deg, rgba(93,95,239,0.06), rgba(93,95,239,0.01));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
  display: flex;
  align-items: end;
  gap: 12px;
}

.bar-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 10px;
  height: 100%;
}

.bar
{
  width: 100%;
  max-width: 34px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, #8587ff 0%, #5d5fef 100%);
  box-shadow: inset 0 -8px 12px rgba(255,255,255,0.12);
}

.bar-label {
  font-size: 0.72rem;
  color: var(--muted);
}

.schedule-list {
  display: grid;
  gap: 14px;
}

.time-block {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 14px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 12px;
}

.time {
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 10px;
  padding: 8px 10px;
  text-align: center;
  font-weight: 700;
  font-size: 0.75rem;
}

.time-block strong {
  display: block;
  margin-bottom: 4px;
}

.time-block small {
  color: var(--muted);
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.chip {
  background: #f3f4f8;
  color: var(--muted);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 600;
}

.chip.active {
  background: var(--primary-soft);
  color: var(--primary);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 14px 10px;
  border-bottom: 1px solid var(--line);
  font-size: 0.95rem;
}

th {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
}

.status.confirmed {
  background: var(--success-soft);
  color: var(--success);
}

.status.pending {
  background: var(--warning-soft);
  color: #b86b00;
}

.staff-list {
  display: grid;
  gap: 14px;
}

.staff-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #f9faff;
}

.person {
  display: flex;
  align-items: center;
  gap: 10px;
}

.person strong,
.person small {
  display: block;
}

.person small {
  color: var(--muted);
}

.score {
  font-weight: 700;
  color: var(--primary);
  background: var(--primary-soft);
  padding: 8px 10px;
  border-radius: 999px;
}

@media (max-width: 1180px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding-bottom: 18px;
  }

  .content-grid,
  .bottom-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .main-content {
    padding: 20px 18px 30px;
  }

  .topbar,
  .topbar-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    min-width: 0;
    width: 100%;
  }

  .stats-grid,
  .content-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
"},{"content":"const chartData = [
  { label: 'Mon', value: 36 },
  { label: 'Tue', value: 58 },
  { label: 'Wed', value: 48 },
  { label: 'Thu', value: 72 },
  { label: 'Fri', value: 64 },
  { label: 'Sat', value: 83 },
  { label: 'Sun', value: 58 }
];

const chartRoot = document.getElementById('bookingChart');

chartData.forEach((item) => {
  const column = document.createElement('div');
  column.className = 'bar-column';

  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.height = `${item.value}%`;
  bar.title = `${item.label}: ${item.value} bookings`;

  const label = document.createElement('span');
  label.className = 'bar-label';
  label.textContent = item.label;

  column.append(bar, label);
  chartRoot.appendChild(column);
});

const filterButtons = document.querySelectorAll('.chip');
const rows = document.querySelectorAll('tbody tr');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((chip) => chip.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;

    rows.forEach((row) => {
      const rowState = row.dataset.status;
      const isVisible = selected === 'all' || rowState === selected;
      row.style.display = isVisible ? '' : 'none';
    });
  });
});
"},{"path":"README.md