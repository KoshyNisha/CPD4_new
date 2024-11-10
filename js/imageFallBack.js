document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("img");
    images.forEach(function(img) {
      img.onerror = function() {
        this.onerror = null; // prevents infinite loop if fallback image also fails
        this.src = "../images/default_image.jpg";
      };
    });
  });