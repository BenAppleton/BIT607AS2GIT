document.getElementById('header-hamburger').addEventListener('click', function() {
  document.querySelector('header .navbar').classList.toggle('active');
});

document.getElementById('footer-hamburger').addEventListener('click', function() {
  document.querySelector('footer .navbar').classList.toggle('active');
});
// code for the "Load More" button on the blog page
document.getElementById('loadMore').addEventListener('click', function() {
  var row3 = document.getElementById('row3');
  var progressBar = document.getElementById('progressBar');
  var loadMoreButton = document.getElementById('loadMore');

  row3.style.display = 'flex';
  loadMoreButton.style.display = 'none';

  // Update the progress bar to 100%
  progressBar.style.width = '100%';
});