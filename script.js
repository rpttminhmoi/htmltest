const images = [
      'banner.jpg',
      'banner1.jpg',
      'banner2.jpg'
  ];
  
  let currentIndex = 0;
  let nextIndex = 1;
  
  function changeBackground() {
      const container = document.querySelector('.background-container');
      const background1 = document.querySelector('.background1');
      const background2 = document.querySelector('.background2');
      
      // Update the images
      background1.style.backgroundImage = `url(${images[currentIndex]})`;
      background2.style.backgroundImage = `url(${images[nextIndex]})`;
  
      // Slide the backgrounds
      container.style.transform = 'translateX(-50%)';
      
      // Reset the slide and update indices after the transition
      setTimeout(() => {
          container.style.transition = 'none';
          container.style.transform = 'translateX(0)';
          
          currentIndex = nextIndex;
          nextIndex = (nextIndex + 1) % images.length;
          
          // Move the next image to the right
          background1.style.backgroundImage = `url(${images[currentIndex]})`;
          background2.style.backgroundImage = `url(${images[nextIndex]})`;
  
          // Re-enable the transition
          setTimeout(() => {
              container.style.transition = 'transform 1s ease-in-out';
          }, 50);
      }, 1000);
  }
  
  setInterval(changeBackground, 5000); // Change background every 5 seconds
  
  window.onload = () => {
      changeBackground(); // Initialize the background change on page load
  };
  