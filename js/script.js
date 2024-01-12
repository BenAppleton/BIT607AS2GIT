document.getElementById('header-hamburger').addEventListener('click', function() {
  document.querySelector('header .navbar').classList.toggle('active');
});

document.getElementById('footer-hamburger').addEventListener('click', function() {
  document.querySelector('footer .navbar').classList.toggle('active');
});