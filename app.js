const filterButtons = document.querySelectorAll('.filter-tab');
const appointmentRows = [...document.querySelectorAll('#appointmentRows tr')];
const searchInput = document.querySelector('#globalSearch');
const countLabel = document.querySelector('#resultCount');
const noResults = document.querySelector('#noResults');
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

const dialog = document.querySelector('#appointmentDialog');
document.querySelector('#newAppointment').addEventListener('click', () => dialog.showModal());
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
