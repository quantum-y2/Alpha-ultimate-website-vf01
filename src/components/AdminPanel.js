import { siteContent, saveContent } from '../utils/contentManager.js';
import { renderPage } from '../App.js';

// Expose this function to the global scope so the contact page can call it
window.renderAdminForm = function() {
    const formContainer = document.getElementById('admin-form-container');
    if (!formContainer) return;
    formContainer.innerHTML = ''; // Clear previous form

    // Simple navigation for different content types
    const nav = document.createElement('div');
    nav.className = 'admin-nav';
    nav.innerHTML = `
        <button data-content="services">Services</button>
        <button data-content="projects">Projects</button>
        <button data-content="testimonials">Testimonials</button>
        <button data-content="slideshows">Slideshows</button>
    `;
    formContainer.appendChild(nav);

    nav.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const contentType = e.target.dataset.content;
            if (contentType === 'slideshows') {
                renderSlideshowEditor();
            } else {
                renderContentEditor(contentType);
            }
        });
    });

    const editorContainer = document.createElement('div');
    editorContainer.id = 'editor-container';
    formContainer.appendChild(editorContainer);
    
    // Render the first section by default
    renderContentEditor('services');
}

// Editor for list-based items (Services, Projects, etc.)
function renderContentEditor(contentType) {
    const container = document.getElementById('editor-container');
    container.innerHTML = `<h2>Editing ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}</h2>`;

    siteContent[contentType].forEach((item, index) => {
        const itemForm = document.createElement('div');
        itemForm.className = 'admin-item-form';
        itemForm.innerHTML = `<h3>Item ${index + 1}</h3>`;
        
        Object.keys(item).forEach(key => {
            const fieldType = key === 'description' || key === 'message' ? 'textarea' : 'input';
            const value = item[key] || '';
            
            if (fieldType === 'textarea') {
                 itemForm.innerHTML += `
                    <label>${key}</label>
                    <textarea data-index="${index}" data-key="${key}">${value}</textarea>
                `;
            } else {
                itemForm.innerHTML += `
                    <label>${key}</label>
                    <input type="text" data-index="${index}" data-key="${key}" value="${value}">
                `;
            }
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Item';
        deleteBtn.className = 'admin-delete-btn';
        deleteBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this item?')) {
                siteContent[contentType].splice(index, 1);
                saveContent();
                renderContentEditor(contentType); // Re-render editor
                renderPage(); // Re-render the main page
            }
        });

        itemForm.appendChild(deleteBtn);
        container.appendChild(itemForm);
    });
    
    // Add New Item button
    const addNewBtn = document.createElement('button');
    addNewBtn.textContent = `Add New ${contentType.slice(0, -1)}`;
    addNewBtn.className = 'admin-add-btn';
    addNewBtn.addEventListener('click', () => {
        const newItem = { ...siteContent[contentType][0] }; // Clone structure
        Object.keys(newItem).forEach(key => newItem[key] = ''); // Clear values
        siteContent[contentType].push(newItem);
        saveContent();
        renderContentEditor(contentType);
    });
    container.appendChild(addNewBtn);

    // Add event listeners for input changes
    container.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('change', (e) => {
            const { index, key } = e.target.dataset;
            siteContent[contentType][index][key] = e.target.value;
            saveContent();
            renderPage(); // Live update the main page
        });
    });
}

// Editor for Slideshows
function renderSlideshowEditor() {
    const container = document.getElementById('editor-container');
    container.innerHTML = `<h2>Editing Slideshows</h2>`;
    
    Object.keys(siteContent.slideshows).forEach(key => {
        const itemForm = document.createElement('div');
        itemForm.className = 'admin-item-form';
        itemForm.innerHTML = `<h3>${key} Slideshow</h3>`;
        
        const urls = siteContent.slideshows[key].join(',\n');
        
        itemForm.innerHTML += `
            <label>Image URLs (comma-separated)</label>
            <textarea data-key="${key}" rows="5">${urls}</textarea>
        `;
        container.appendChild(itemForm);
    });

    // Add event listeners for textarea changes
    container.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('change', (e) => {
            const { key } = e.target.dataset;
            // Split by comma, trim whitespace, and filter empty strings
            siteContent.slideshows[key] = e.target.value
                .split(',')
                .map(url => url.trim())
                .filter(url => url.length > 0);
            saveContent();
            renderPage(); // Live update
        });
    });
}


export default function AdminPanel() {
  const panel = document.createElement('div');
  panel.id = 'admin-panel';
  panel.innerHTML = `
    <div class="admin-panel-content">
      <button id="admin-close-btn">&times;</button>
      <h1>Website Content Manager</h1>
      <div id="admin-form-container"></div>
    </div>
  `;
  
  panel.querySelector('#admin-close-btn').addEventListener('click', () => {
    panel.classList.remove('visible');
  });

  return panel;
}
