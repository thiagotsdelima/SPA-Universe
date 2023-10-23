import { Router } from './router.js';
import { applyActiveStyles } from './controls.js';

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    applyActiveStyles(event.currentTarget);
    router.route(event);
  });
});

window.onpopstate = () => router.handle();
router.handle();
window.route = () => router.route()