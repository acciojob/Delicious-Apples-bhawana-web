//your code here
document.querySelectorAll('.color-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const color = e.target.dataset.color;
    const mainImage = document.querySelector('.photo-main img');
    
    // Update the main image based on the selected color
    switch (color) {
      case 'green':
        mainImage.src = 'green-apple.jpg';
        break;
      case 'yellow':
        mainImage.src = 'yellow-apple.jpg';
        break;
      case 'orange':
        mainImage.src = 'orange-apple.jpg';
        break;
      case 'red':
        mainImage.src = 'red-apple.jpg';
        break;
    }
  });
});
