export default function Careers() {
  const section = document.createElement('section');
  section.id = 'careers';
  section.innerHTML = `
    <h2 class="section-title neon-text">Join the Vanguard</h2>
    <p class="contact-subtitle">We are building an elite team of innovators, problem-solvers, and technical experts. If you are driven to diversify the concept of construction, we want to hear from you.</p>
    
    <div class="careers-content">
        <img src="/src/assets/careers-image.jpg" alt="Our Team" class="neon-border">
        <div class="careers-info">
            <h3>Current Openings</h3>
            <p><i>Currently, all positions are filled. We are always accepting speculative applications from exceptional talent.</i></p>
            <a href="mailto:info@alpha-ultimate.com?subject=Career%20Inquiry" class="cta-btn secondary">Submit Your CV</a>
        </div>
    </div>
  `;
  return section;
}
