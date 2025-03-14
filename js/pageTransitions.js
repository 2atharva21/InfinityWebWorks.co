
// Framer Motion page transitions
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      if (href && href !== '#') {
        document.body.classList.add('page-transition');
        
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Duration of the transition
      }
    });
  });
});
