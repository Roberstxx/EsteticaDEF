const services = [
  {
    name: 'Uñas Acrílicas Naturales',
    category: 'uñas',
    description: 'Set natural con forma almendra, acabado duradero.',
    price: 450
  },
  {
    name: 'Maquillaje para Evento',
    category: 'maquillaje',
    description: 'Look de larga duración y piel luminosa.',
    price: 700
  },
  {
    name: 'Peinado Recogido Elegante',
    category: 'peinado',
    description: 'Recogido pulcro y sofisticado para eventos.',
    price: 550
  },
  {
    name: 'Corte de Cabello Caballero',
    category: 'cortecolor',
    description: 'Corte clásico o fade moderno adaptado a tu estilo.',
    price: 200
  },
  {
    name: 'Manicure Express',
    category: 'uñas',
    description: 'Manicure rápido y pulcro para el día a día.',
    price: 180
  },
  {
    name: 'Tratamiento Capilar',
    category: 'tratamientos',
    description: 'Hidratación profunda con productos nutritivos.',
    price: 300
  }
];

const listEl = document.getElementById('service-list');
if (listEl) {
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
}

const form = document.getElementById('contact-form');
if (form) {
  const statusEl = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = 'Enviando...';
    setTimeout(() => {
      statusEl.textContent = '¡Gracias! Nos pondremos en contacto pronto.';
      form.reset();
    }, 1000);
  });
}

