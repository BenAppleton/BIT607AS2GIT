// >>>> JS for global navigation <<<<
document.getElementById('header-hamburger').addEventListener('click', function() {
  document.querySelector('header .navbar').classList.toggle('active');
});

document.getElementById('footer-hamburger').addEventListener('click', function() {
  document.querySelector('footer .navbar').classList.toggle('active');
});

// >>>> JS for blog page <<<<
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
document.getElementById('blogSearch').addEventListener('input', function(e) {
  var searchTerm = e.target.value.toLowerCase();
  var blogs = document.querySelectorAll('.blog');

  blogs.forEach(function(blog) {
      var textContent = blog.innerText.toLowerCase();
      if (textContent.includes(searchTerm)) {
          blog.style.display = ''; // Show the blog post
      } else {
          blog.style.display = 'none'; // Hide the blog post
      }
  });
});
document.getElementById('blogFilter').addEventListener('change', function(e) {
  var selectedTag = e.target.value;
  var blogs = document.querySelectorAll('.blog');

  blogs.forEach(function(blog) {
      // Check if the blog contains a div with a class matching the selected tag
      var hasTag = (selectedTag === 'all') || blog.querySelector('.blog-tag.' + selectedTag);

      if (hasTag) {
          blog.style.display = ''; // Show the blog post
      } else {
          blog.style.display = 'none'; // Hide the blog post
      }
  });
});