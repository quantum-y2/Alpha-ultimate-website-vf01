import { siteContent } from '../utils/contentManager.js';
export default function Testimonials() {
  const section = document.createElement('section');
  section.id = 'testimonials';
  section.innerHTML = `<h2 class="section-title neon-text">What Our Partners Say</h2>`;
  const intro = document.createElement('div');
  intro.className = 'testimonial-intro';
  intro.innerHTML = `
    <img src="/src/assets/testimonial-hero.jpg" alt="Handshake" class="neon-border" />
    <p>Our success is measured by the success of our partners. We build relationships on a foundation of trust, execution, and verifiable results.</p>
  `;
  section.appendChild(intro);
  const container = document.createElement('div');
  container.className = 'testimonials-grid';
  siteContent.testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card neon-border';
    card.innerHTML = `
      <p class="quote">"${testimonial.message}"</p>
      <div class="author">
        <img src="${testimonial.photo}" alt="${testimonial.name}">
        <div class="author-info">
          <h4 class="neon-text">${testimonial.name}</h4>
          <span>${testimonial.role}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  section.appendChild(container);
  return section;
}
