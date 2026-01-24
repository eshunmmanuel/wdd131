// Toggle hamburger menu
document.getElementById('menuButton').addEventListener('click', function() {
  const nav = document.getElementById('mainNav');
  const isActive = nav.classList.contains('active');
  
  if (isActive) {
    nav.classList.remove('active');
    this.setAttribute('aria-expanded', 'false');
    this.textContent = '☰';
  } else {
    nav.classList.add('active');
    this.setAttribute('aria-expanded', 'true');
    this.textContent = '✕'; // Optional: change to X when open
  }
});

// Update footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent += document.lastModified;