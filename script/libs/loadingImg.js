export default function loadingAnimation(target){
    const images = document.querySelectorAll(target);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loading'); // Start animation
          if (img.dataset.src) {
            img.src = img.dataset.src; // Swap to real src
            img.removeAttribute('data-src');
                }
            observer.unobserve(img); // Stop observing once loaded
          }
        });
    });

    images.forEach(img => {
      observer.observe(img); // Watch for visibility
      img.addEventListener('load', () => {
        img.classList.remove('loading'); // Stop animation on load
        });
    });
  };