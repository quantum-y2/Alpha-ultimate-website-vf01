export default function Navbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="logo">
      <a href="#home">
        <img src="/src/assets/logo.png" alt="Alpha Ultimate Logo">
      </a>
    </div>
    <ul class="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#careers">Careers</a></li>
    </ul>
    <div class="menu-toggle">☰</div>
  `;
  
  nav.querySelector('.menu-toggle').addEventListener('click', () => {
    nav.querySelector('.menu').classList.toggle('active');
  });
  
  return nav;
}
