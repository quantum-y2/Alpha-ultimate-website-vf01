export default function About() {
  const section = document.createElement('section');
  section.id = 'about';
  section.innerHTML = `
    <h2 class="section-title neon-text">The Alpha Ultimate Blueprint</h2>
    
    <div class="about-grid">
      <div class="about-text">
        <h3>Our Mission: Digitize & Diversify</h3>
        <p>Alpha Ultimate Ltd. is not just a contractor; we are your strategic partner in diversifying the future of construction. Our mission is to fuse project intelligence with flawless execution, transforming traditional methods into data-driven, high-velocity operations.</p>
        <p>We are actively seeking new projects and partnership opportunities to challenge the status quo. By leveraging our AI-powered monitoring core and elite technical teams, we deliver results with unparalleled efficiency, safety, and quality.</p>
        <a href="#contact" class="cta-btn secondary">Partner With Us</a>
      </div>
      <div class="about-image neon-border">
        <img src="/src/assets/about-image.jpg" alt="Alpha Ultimate Team">
      </div>
    </div>
    
    <h3 class="subsection-title neon-text">Our Core Values</h3>
    <div class="values-grid">
      <div class="value-item neon-border">
        <h4>Integrity</h4>
        <p>Full transparency, absolute accountability. Our word is our bond, and our data is the proof.</p>
      </div>
      <div class="value-item neon-border">
        <h4>Innovation</h4>
        <p>We don't just use technology; we build our processes around it. We are relentless in finding a better, smarter, and faster way.</p>
      </div>
      <div class="value-item neon-border">
        <h4>Precision</h4>
        <p>Zero-defect execution is our standard. From planning to deployment, every action is measured, intentional, and precise.</p>
      </div>
    </div>
    
    <h3 class="subsection-title neon-text">Our 4-Step Process</h3>
    <div class="process-timeline">
      <div class="process-step neon-border">
        <span class="step-number">1</span>
        <h4>Discover</h4>
        <p>We dive deep into your project's DNA, identifying critical paths, risks, and opportunities for digital integration.</p>
      </div>
      <div class="process-step neon-border">
        <span class="step-number">2</span>
        <h4>Design</h4>
        <p>We build a custom blueprint, integrating our (PI) Core and strategic teams directly into your workflow.</p>
      </div>
      <div class="process-step neon-border">
        <span class="step-number">3</span>
        <h4>Deploy</h4>
        <p>Flawless execution begins. Our teams are on-site, and our AI is online, providing real-time data from day one.</p>
      </div>
      <div class="process-step neon-border">
        <span class="step-number">4</span>
        <h4>Dominate</h4>
        <p>We drive the project to completion ahead of schedule and under budget, turning insights into actionable results.</p>
      </div>
    </div>
  `;
  
  return section;
}
