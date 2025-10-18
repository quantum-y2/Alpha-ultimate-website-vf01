import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Projects from './pages/Projects.js';
import Testimonials from './pages/Testimonials.js';
import Contact from './pages/Contact.js';
import Careers from './pages/Careers.js';
import AdminPanel from './components/AdminPanel.js';
import { loadContent } from './utils/contentManager.js';

const routes = {
  '#home': Home,
  '#about': About,
  '#services': Services,
  '#projects': Projects,
  '#testimonials': Testimonials,
  '#contact': Contact,
  '#careers': Careers
};

// *** EXPORTED FUNCTION ***
// This allows the Admin Panel to force a full page refresh
export function renderPage() {
    const main = document.getElementById('page-content');
    if (!main) return;

    const hash = window.location.hash || '#home';
    const pageComponent = routes[hash] || routes['#home'];
    
    // Clear old content and add new
    main.replaceChildren(pageComponent());
    
    // Update active nav link
    document.querySelectorAll('nav .menu a').forEach(a => {
      a.classList.toggle('active', a.hash === hash);
    });
    
    window.scrollTo(0, 0);
}

export default function App() {
  // Load content from localStorage or defaults before rendering
  loadContent();

  const container = document.createElement('div');
  const nav = Navbar();
  const main = document.createElement('main');
  main.id = 'page-content';
  
  container.appendChild(nav);
  container.appendChild(main);
  container.appendChild(Footer());
  container.appendChild(AdminPanel()); // Add hidden admin panel
  
  // --- Holographic Grid ---
  const grid = document.createElement('div');
  grid.id = 'holographic-grid';
  container.appendChild(grid);

  container.addEventListener('mousemove', (e) => {
      grid.style.setProperty('--mouse-x', e.clientX + 'px');
      grid.style.setProperty('--mouse-y', (e.clientY + window.scrollY) + 'px');
  });
  // --- End of feature ---

  window.addEventListener('hashchange', renderPage);
  
  // Initial render
  setTimeout(renderPage, 0); 
  
  return container;
}
