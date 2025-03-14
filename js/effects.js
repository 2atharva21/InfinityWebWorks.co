
// Initialize AOS
AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1.2,
});

// GSAP animations
gsap.from('.fade-in', {
  opacity: 0,
  duration: 1,
  y: 50,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.fade-in',
    start: 'top 80%',
  },
});

// Framer Motion animations
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

document.querySelectorAll('.motion-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
