import './styles/main.pcss';
import ContentRender from './ContentRender.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = new ContentRender();
  app.render();
});