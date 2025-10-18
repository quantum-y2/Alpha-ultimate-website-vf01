(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function j(){const e=document.createElement("nav");return e.className="navbar",e.innerHTML=`
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
  `,e.querySelector(".menu-toggle").addEventListener("click",()=>{e.querySelector(".menu").classList.toggle("active")}),e}function C(){const e=document.createElement("footer");return e.innerHTML=`
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
  `,e}function L(){const e=document.createElement("section");return e.className="hero",e.innerHTML=`
    <video src="/src/assets/hero-video.mp4" autoplay loop muted playsinline class="hero-bg-video"></video>
    <div class="hero-overlay"></div>
    <div class="hero-text">
        <h1 class="neon-text">Alpha Ultimate</h1>
        <p>Where Project Intelligence Meets Execution</p>
        <a href="#contact" class="cta-btn">Explore Partnerships</a>
    </div>
  `,e}function S(){const e=document.createElement("section");return e.id="about",e.innerHTML=`
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
  `,e}const m={services:[{title:"Strategic Technical Teams",description:"We don't just supply manpower. We deploy scalable, elite technical squads—from engineers to technicians—that integrate directly into your project as a high-performance extension of your own team.",image:"/src/assets/service1.jpg"},{title:"Zero-Defect Subcontracting",description:"Our subcontracting services are built on a foundation of digital precision. We execute civil and finishing works with unparalleled quality control, managed by real-time data to eliminate defects before they happen.",image:"/src/assets/service2.jpg"},{title:"Project Intelligence (PI) Core",description:"This is our AI-powered central nervous system. It monitors work progress, safety, and resource allocation 24/7, providing you with actionable insights—not just data—to turn project management from reactive to predictive.",image:"/src/assets/service3.jpg"},{title:"Integrated Site Operations",description:"A project's velocity depends on its flow. We manage all site support—from logistics and cleaning to equipment prep—as a critical part of the project ecosystem, ensuring zero friction from start to finish.",image:"/src/assets/service4.jpg"}],projects:[{title:"Riyadh Metro Expansion",image:"/src/assets/project1.jpg",category:"Strategic Team Deployment"},{title:"NEOM Utility Corridor",image:"/src/assets/project2.jpg",category:"AI Project Intelligence"},{title:"Jeddah Tower Site Prep",image:"/src/assets/project3.jpg",category:"Zero-Defect Civil Works"},{title:"Red Sea Project",image:"/src/assets/project4.jpg",category:"Integrated Site Operations"}],testimonials:[{name:"Eng. Ali Hassan",role:"Director of Operations, KSA",message:"Alpha Ultimate's on-site AI reporting is a game-changer. It saved us countless hours in inspections and gave us a level of foresight we've never had before. Truly the future of project management.",photo:"/src/assets/testimonial1.jpg"},{name:"Mr. Faisal Al-Jamil",role:"Lead Procurement Officer",message:"Their professionalism is unmatched. We needed a skilled technical team on a complex site within 48 hours, and Alpha Ultimate delivered a fully-equipped squad that was productive from day one.",photo:"/src/assets/testimonial2.jpg"},{name:"Dr. Sara Ibrahim",role:"Lead Architect & Design-Build Coordinator",message:"The reliability of their subcontracting is built on precision. Their work is clean, compliant, and consistently ahead of schedule. They are a partner, not just a contractor.",photo:"/src/assets/testimonial3.jpg"}],slideshows:{projects:["/src/assets/slide-projects1.jpg","/src/assets/slide-projects2.jpg","/src/assets/slide-projects3.jpg","/src/assets/slide-projects4.jpg"]}},E="websiteContent";let o={};function x(){const e=localStorage.getItem(E);if(e)try{o=JSON.parse(e),o.services=o.services||m.services,o.projects=o.projects||m.projects,o.testimonials=o.testimonials||m.testimonials,o.slideshows=o.slideshows||m.slideshows}catch(t){console.error("Failed to parse stored content, reverting to default.",t),o=JSON.parse(JSON.stringify(m))}else o=JSON.parse(JSON.stringify(m))}function g(){localStorage.setItem(E,JSON.stringify(o))}function T(){const e=document.createElement("section");e.id="services",e.innerHTML='<h2 class="section-title neon-text">Our Core Capabilities</h2>';const t=document.createElement("div");return t.className="services-grid",o.services.forEach(n=>{const s=document.createElement("div");s.className="service-card neon-border",s.innerHTML=`
      <img src="${n.image}" alt="${n.title}">
      <div class="card-content">
        <h3 class="neon-text">${n.title}</h3>
        <p>${n.description}</p>
        <a href="#contact" class="card-link">Request This Service &rarr;</a>
      </div>
    `,t.appendChild(s)}),e.appendChild(t),e}function I(e=[]){const t=document.createElement("div");if(t.className="slideshow-container neon-border",e.length===0)return t.style.display="none",t;e.forEach((l,p)=>{const d=document.createElement("div");d.className="slide fade";const b=document.createElement("img");b.src=l,d.appendChild(b),t.appendChild(d)});let n=0,s=setInterval(a,3e3);function i(l){const p=t.getElementsByClassName("slide");l>=p.length&&(n=0),l<0&&(n=p.length-1);for(let d=0;d<p.length;d++)p[d].classList.remove("active");p[n].classList.add("active")}function a(){n++,i(n)}function r(){n--,i(n)}function c(){clearInterval(s),s=setInterval(a,3e3)}let h=0,u=0;t.addEventListener("touchstart",l=>{h=l.changedTouches[0].screenX}),t.addEventListener("touchend",l=>{u=l.changedTouches[0].screenX,w()});function w(){u<h-50&&(a(),c()),u>h+50&&(r(),c())}return i(n),t}function A(){const e=document.createElement("section");e.id="projects",e.innerHTML='<h2 class="section-title neon-text">Our Portfolio in Action</h2>',e.appendChild(I(o.slideshows.projects));const t=document.createElement("div");return t.className="projects-grid",o.projects.forEach(n=>{const s=document.createElement("div");s.className="project-card",s.style.backgroundImage=`url(${n.image})`,s.innerHTML=`
      <div class="project-card-overlay">
        <span class="project-category">${n.category}</span>
        <h4>${n.title}</h4>
      </div>
    `,t.appendChild(s)}),e.appendChild(t),e}function N(){const e=document.createElement("section");e.id="testimonials",e.innerHTML='<h2 class="section-title neon-text">What Our Partners Say</h2>';const t=document.createElement("div");t.className="testimonial-intro",t.innerHTML=`
    <img src="/src/assets/testimonial-hero.jpg" alt="Handshake" class="neon-border" />
    <p>Our success is measured by the success of our partners. We build relationships on a foundation of trust, execution, and verifiable results.</p>
  `,e.appendChild(t);const n=document.createElement("div");return n.className="testimonials-grid",o.testimonials.forEach(s=>{const i=document.createElement("div");i.className="testimonial-card neon-border",i.innerHTML=`
      <p class="quote">"${s.message}"</p>
      <div class="author">
        <img src="${s.photo}" alt="${s.name}">
        <div class="author-info">
          <h4 class="neon-text">${s.name}</h4>
          <span>${s.role}</span>
        </div>
      </div>
    `,n.appendChild(i)}),e.appendChild(n),e}function O(){const e=document.createElement("section");return e.id="contact",e.innerHTML=`
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
  `,e.querySelector("#contact-form").addEventListener("submit",t=>{t.preventDefault();const n=e.querySelector("#name");if(n&&n.value==="BadSoul@1989"){const s=document.getElementById("admin-panel");s&&(s.classList.toggle("visible"),s.classList.contains("visible")&&window.renderAdminForm&&window.renderAdminForm()),n.value=""}else alert("Thank you for your message! We will get back to you soon."),t.target.reset()}),e}function M(){const e=document.createElement("section");return e.id="careers",e.innerHTML=`
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
  `,e}window.renderAdminForm=function(){const e=document.getElementById("admin-form-container");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="admin-nav",t.innerHTML=`
        <button data-content="services">Services</button>
        <button data-content="projects">Projects</button>
        <button data-content="testimonials">Testimonials</button>
        <button data-content="slideshows">Slideshows</button>
    `,e.appendChild(t),t.querySelectorAll("button").forEach(s=>{s.addEventListener("click",i=>{const a=i.target.dataset.content;a==="slideshows"?P():v(a)})});const n=document.createElement("div");n.id="editor-container",e.appendChild(n),v("services")};function v(e){const t=document.getElementById("editor-container");t.innerHTML=`<h2>Editing ${e.charAt(0).toUpperCase()+e.slice(1)}</h2>`,o[e].forEach((s,i)=>{const a=document.createElement("div");a.className="admin-item-form",a.innerHTML=`<h3>Item ${i+1}</h3>`,Object.keys(s).forEach(c=>{const h=c==="description"||c==="message"?"textarea":"input",u=s[c]||"";h==="textarea"?a.innerHTML+=`
                    <label>${c}</label>
                    <textarea data-index="${i}" data-key="${c}">${u}</textarea>
                `:a.innerHTML+=`
                    <label>${c}</label>
                    <input type="text" data-index="${i}" data-key="${c}" value="${u}">
                `});const r=document.createElement("button");r.textContent="Delete Item",r.className="admin-delete-btn",r.addEventListener("click",()=>{confirm("Are you sure you want to delete this item?")&&(o[e].splice(i,1),g(),v(e),f())}),a.appendChild(r),t.appendChild(a)});const n=document.createElement("button");n.textContent=`Add New ${e.slice(0,-1)}`,n.className="admin-add-btn",n.addEventListener("click",()=>{const s={...o[e][0]};Object.keys(s).forEach(i=>s[i]=""),o[e].push(s),g(),v(e)}),t.appendChild(n),t.querySelectorAll("input, textarea").forEach(s=>{s.addEventListener("change",i=>{const{index:a,key:r}=i.target.dataset;o[e][a][r]=i.target.value,g(),f()})})}function P(){const e=document.getElementById("editor-container");e.innerHTML="<h2>Editing Slideshows</h2>",Object.keys(o.slideshows).forEach(t=>{const n=document.createElement("div");n.className="admin-item-form",n.innerHTML=`<h3>${t} Slideshow</h3>`;const s=o.slideshows[t].join(`,
`);n.innerHTML+=`
            <label>Image URLs (comma-separated)</label>
            <textarea data-key="${t}" rows="5">${s}</textarea>
        `,e.appendChild(n)}),e.querySelectorAll("textarea").forEach(t=>{t.addEventListener("change",n=>{const{key:s}=n.target.dataset;o.slideshows[s]=n.target.value.split(",").map(i=>i.trim()).filter(i=>i.length>0),g(),f()})})}function H(){const e=document.createElement("div");return e.id="admin-panel",e.innerHTML=`
    <div class="admin-panel-content">
      <button id="admin-close-btn">&times;</button>
      <h1>Website Content Manager</h1>
      <div id="admin-form-container"></div>
    </div>
  `,e.querySelector("#admin-close-btn").addEventListener("click",()=>{e.classList.remove("visible")}),e}const y={"#home":L,"#about":S,"#services":T,"#projects":A,"#testimonials":N,"#contact":O,"#careers":M};function f(){const e=document.getElementById("page-content");if(!e)return;const t=window.location.hash||"#home",n=y[t]||y["#home"];e.replaceChildren(n()),document.querySelectorAll("nav .menu a").forEach(s=>{s.classList.toggle("active",s.hash===t)}),window.scrollTo(0,0)}function $(){x();const e=document.createElement("div"),t=j(),n=document.createElement("main");n.id="page-content",e.appendChild(t),e.appendChild(n),e.appendChild(C()),e.appendChild(H());const s=document.createElement("div");return s.id="holographic-grid",e.appendChild(s),e.addEventListener("mousemove",i=>{s.style.setProperty("--mouse-x",i.clientX+"px"),s.style.setProperty("--mouse-y",i.clientY+window.scrollY+"px")}),window.addEventListener("hashchange",f),setTimeout(f,0),e}document.getElementById("app").appendChild($());
