import Slideshow from '../components/Slideshow.js';
import { siteContent } from '../utils/contentManager.js';
export default function Projects() {
  const section = document.createElement('section');
  section.id = 'projects';
  section.innerHTML = `<h2 class="section-title neon-text">Our Portfolio in Action</h2>`;
  
  // Use the dynamically loaded slideshow images
  section.appendChild(Slideshow(siteContent.slideshows.projects));
  
  const container = document.createElement('div');
  container.className = 'projects-grid';
  siteContent.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.backgroundImage = `url(${project.image})`;
    card.innerHTML = `
      <div class="project-card-overlay">
        <span class="project-category">${project.category}</span>
        <h4>${project.title}</h4>
      </div>
    `;
    container.appendChild(card);
  });
  section.appendChild(container);
  return section;
}
