import { siteContent } from '../utils/contentManager.js';
export default function Services() {
  const section = document.createElement('section');
  section.id = 'services';
  section.innerHTML = `<h2 class="section-title neon-text">Our Core Capabilities</h2>`;
  const container = document.createElement('div');
  container.className = 'services-grid';
  siteContent.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card neon-border';
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}">
      <div class="card-content">
        <h3 class="neon-text">${service.title}</h3>
        <p>${service.description}</p>
        <a href="#contact" class="card-link">Request This Service &rarr;</a>
      </div>
    `;
    container.appendChild(card);
  });
  section.appendChild(container);
  return section;
}
