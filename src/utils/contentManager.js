import { defaultContent } from '../data/defaultContent.js';

const CONTENT_KEY = 'websiteContent';

// Global variable to hold the current content
export let siteContent = {};

// Load content from localStorage or use defaults
export function loadContent() {
  const storedContent = localStorage.getItem(CONTENT_KEY);
  if (storedContent) {
    try {
      siteContent = JSON.parse(storedContent);
      // Ensure all default keys exist
      siteContent.services = siteContent.services || defaultContent.services;
      siteContent.projects = siteContent.projects || defaultContent.projects;
      siteContent.testimonials = siteContent.testimonials || defaultContent.testimonials;
      siteContent.slideshows = siteContent.slideshows || defaultContent.slideshows;
    } catch (e) {
      console.error("Failed to parse stored content, reverting to default.", e);
      siteContent = JSON.parse(JSON.stringify(defaultContent));
    }
  } else {
    siteContent = JSON.parse(JSON.stringify(defaultContent)); // Deep copy
  }
}

// Save content to localStorage
export function saveContent() {
  localStorage.setItem(CONTENT_KEY, JSON.stringify(siteContent));
}
