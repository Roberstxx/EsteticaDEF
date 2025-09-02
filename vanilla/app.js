const services = [
  {
    name: 'Manicure clásico',
    category: 'uñas',
    description: 'Cuidado básico de uñas con esmaltado tradicional.',
    price: 200
  },
  {
    name: 'Maquillaje de fiesta',
    category: 'maquillaje',
    description: 'Maquillaje profesional para eventos especiales.',
    price: 450
  },
  {
    name: 'Peinado recogido',
    category: 'peinado',
    description: 'Estilo elegante ideal para eventos formales.',
    price: 350
  },
  {
    name: 'Uñas acrílicas',
    category: 'uñas',
    description: 'Extensiones de uñas con diseño personalizado.',
    price: 500
  }
];

const listEl = document.getElementById('service-list');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderServices(filter = 'todos') {
  listEl.innerHTML = '';
  services
    .filter(s => filter === 'todos' || s.category === filter)
    .forEach(s => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <p><strong>$${s.price}</strong></p>
      `;
      listEl.appendChild(card);
    });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderServices(btn.dataset.category);
  });
});

renderServices();

// Simple contact form handler
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = 'Enviando...';
  setTimeout(() => {
    statusEl.textContent = '¡Gracias! Nos pondremos en contacto pronto.';
    form.reset();
  }, 1000);
});
