export function applyActiveStyles(link) {
  const navLinks = document.querySelectorAll('.onclick');
  navLinks.forEach(l => l.classList.remove('active'));
  link.classList.add('active');
}
