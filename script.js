// Add event listener to dropdown elements
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseover', function() {
        // Show dropdown menu on hover
        dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        // Hide dropdown menu on mouseout
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
});


var scrollPosition = 150;
document.addEventListener("scroll", function() {
  if (window.scrollY > scrollPosition) {
    // scrolled down, show the button
    document.getElementById("scroll-to-top-btn").style.display = "block";
  } else {
    // scrolled up, hide the button
    document.getElementById("scroll-to-top-btn").style.display = "none";
  }
});