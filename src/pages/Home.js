export default function Home() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <video src="/src/assets/hero-video.mp4" autoplay loop muted playsinline class="hero-bg-video"></video>
    <div class="hero-overlay"></div>
    <div class="hero-text">
        <h1 class="neon-text">Alpha Ultimate</h1>
        <p>Where Project Intelligence Meets Execution</p>
        <a href="#contact" class="cta-btn">Explore Partnerships</a>
    </div>
  `;
  return section;
}
