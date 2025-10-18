export default function Contact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.innerHTML = `
    <h2 class="section-title neon-text">Start the Conversation</h2>
    <p class="contact-subtitle">Your project's future starts here. Whether you have a complex challenge, a project proposal, or a partnership opportunity, our team is ready to connect. Let's build the future of construction together.</p>
    
    <div class="contact-form-container neon-border">
      <form id="contact-form">
        <div class="form-group">
          <input type="text" id="name" name="name" placeholder=" " required>
          <label for="name">Name</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" name="email" placeholder=" " required>
          <label for="email">Email</label>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" rows="5" placeholder=" " required></textarea>
          <label for="message">Your Project or Proposal</label>
        </div>
        <button type="submit" class="cta-btn">Send Proposal</button>
      </form>
    </div>
  `;
  
  // *** ADMIN PANEL TRIGGER FIX ***
  // Listen to the form's submit event
  section.querySelector('#contact-form').addEventListener('submit', (e) => {
    // ALWAYS prevent default
    e.preventDefault(); 
    
    const nameInput = section.querySelector('#name');
    
    if (nameInput && nameInput.value === 'BadSoul@1989') {
      // This is the admin trigger
      const panel = document.getElementById('admin-panel');
      if (panel) {
        panel.classList.toggle('visible');
        if (panel.classList.contains('visible') && window.renderAdminForm) {
           window.renderAdminForm();
        }
      }
      // Clear the name field so it's not obvious
      nameInput.value = '';
      
    } else {
      // This is the normal submit logic
      alert('Thank you for your message! We will get back to you soon.');
      e.target.reset();
    }
  });
  
  return section;
}
