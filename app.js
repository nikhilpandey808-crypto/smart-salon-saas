const filterButtons = [...document.querySelectorAll('.filter-tab')];
const appointmentBody = document.querySelector('#appointmentRows');
const searchInput = document.querySelector('#globalSearch');
const countLabel = document.querySelector('#resultCount');
const noResults = document.querySelector('#noResults');
const dialog = document.querySelector('#appointmentDialog');
const storageKey = 'smartflow-demo-appointments';
let appointmentRows = [...appointmentBody.querySelectorAll('tr')];
let activeFilter = 'all';

function updateAppointments() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  appointmentRows.forEach((row) => {
    const matchesFilter = activeFilter === 'all' || row.dataset.status === activeFilter;
    const matchesSearch = !query || row.textContent.toLowerCase().includes(query);
    const visible = matchesFilter && matchesSearch;
    row.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  countLabel.textContent = String(visibleCount);
  countLabel.parentElement.textContent = `Showing ${visibleCount} of ${appointmentRows.length} appointments`;
  noResults.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    updateAppointments();
  });
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
});

searchInput.addEventListener('input', updateAppointments);

function makeCell(text, className = '') {
  const cell = document.createElement('td');
  if (className) cell.className = className;
  cell.textContent = text;
  return cell;
}

function createAppointmentRow(appointment) {
  const row = document.createElement('tr');
  row.dataset.status = 'upcoming';

  const clientCell = document.createElement('td');
  const client = document.createElement('span');
  client.className = 'client-cell';
  const avatar = document.createElement('span');
  avatar.className = 'client-avatar avatar-purple';
  avatar.textContent = appointment.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  const name = document.createElement('b');
  name.textContent = appointment.name;
  client.append(avatar, name);
  clientCell.append(client);

  const teamCell = document.createElement('td');
  const team = document.createElement('span');
  team.className = 'team-cell';
  const teamDot = document.createElement('span');
  teamDot.className = 'team-dot dot-violet';
  teamDot.textContent = appointment.staff[0];
  team.append(teamDot, document.createTextNode(appointment.staff));
  teamCell.append(team);

  const statusCell = document.createElement('td');
  const status = document.createElement('span');
  status.className = 'status status-confirmed';
  const statusDot = document.createElement('i');
  status.append(statusDot, document.createTextNode('Confirmed'));
  statusCell.append(status);

  const menuCell = document.createElement('td');
  const menu = document.createElement('button');
  menu.className = 'row-menu';
  menu.type = 'button';
  menu.setAttribute('aria-label', `More options for ${appointment.name}`);
  menu.textContent = '···';
  menuCell.append(menu);

  row.append(
    clientCell,
    makeCell(appointment.service),
    teamCell,
    makeCell(appointment.time),
    statusCell,
    makeCell(`$${Number(appointment.amount).toFixed(2)}`, 'amount'),
    menuCell
  );
  return row;
}

function loadSavedAppointments() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (!Array.isArray(saved)) return;
    saved.forEach((appointment) => {
      if (appointment && appointment.name && appointment.service && appointment.staff && appointment.time && Number.isFinite(Number(appointment.amount))) {
        appointmentBody.prepend(createAppointmentRow(appointment));
      }
    });
  } catch (error) {
    // Storage can be disabled in private browsing; the dashboard still works for this visit.
  }
  appointmentRows = [...appointmentBody.querySelectorAll('tr')];
}

function setupAppointmentDialog() {
  const form = document.createElement('form');
  form.className = 'booking-form';
  form.innerHTML = `
    <button class="dialog-close" type="button" aria-label="Close">×</button>
    <span class="dialog-icon">＋</span>
    <p class="overline">QUICK ACTION</p>
    <h2>New appointment</h2>
    <p class="form-intro">Add a booking to this demo dashboard. It will be saved in this browser.</p>
    <label>Client name<input name="name" autocomplete="name" maxlength="60" required placeholder="e.g. Jamie Parker"></label>
    <div class="form-row">
      <label>Service<select name="service" required><option value="">Choose a service</option><option>Signature haircut</option><option>Balayage color</option><option>Gel manicure</option><option>Glow facial</option></select></label>
      <label>Team member<select name="staff" required><option value="">Choose a stylist</option><option>Maya Chen</option><option>Lena Ortiz</option><option>Ella Brooks</option></select></label>
    </div>
    <div class="form-row">
      <label>Time<input name="time" type="time" required></label>
      <label>Amount ($)<input name="amount" type="number" min="0" max="10000" step="0.01" required placeholder="52"></label>
    </div>
    <button class="primary-button dialog-button" type="submit">Add appointment</button>`;
  dialog.replaceChildren(form);

  form.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const appointment = Object.fromEntries(formData.entries());
    const row = createAppointmentRow(appointment);
    appointmentBody.prepend(row);
    appointmentRows = [...appointmentBody.querySelectorAll('tr')];

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      saved.push(appointment);
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch (error) {
      // Continue without persistence if browser storage is unavailable or full.
    }

    form.reset();
    activeFilter = 'all';
    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === 'all';
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    updateAppointments();
    dialog.close();
  });
}

document.querySelector('#newAppointment').addEventListener('click', () => dialog.showModal());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

loadSavedAppointments();
setupAppointmentDialog();
updateAppointments();
