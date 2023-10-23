export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
  }
  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
  
        
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => link.classList.remove('active'));
  
        
        let currentPage;
        if (pathname === '/') {
          currentPage = 'home';
          
          document.querySelector('a[href="/"]').classList.add('active');
        } else {
          currentPage = pathname.substr(1); 
        }
  
        
        if (pathname !== '/') {
          document.querySelector(`a[href="/${currentPage}"]`).classList.add('active');
        }
      });
      
  }
  
}
  

  