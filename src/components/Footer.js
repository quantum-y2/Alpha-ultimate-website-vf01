export default function Footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-info">
        <h3>Alpha Ultimate Ltd.</h3>
        <p>Riyadh, Kingdom of Saudi Arabia</p>
        <p>Email: <a href="mailto:info@alpha-ultimate.com">info@alpha-ultimate.com</a></p>
        <p>Phone: <a href="tel:+966578695494">+966 57 869 5494</a></p>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-social">
        <h4>Connect With Us</h4>
        <a href="#">LinkedIn</a> | <a href="#">Twitter</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Alpha Ultimate Ltd. All rights reserved.</p>
    </div>
  `;
  return footer;
}
