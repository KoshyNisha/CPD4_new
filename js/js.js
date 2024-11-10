// gallery slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // wrap around if user is on last image
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// make the dots focusable and clickable using keyboard enter key
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      dot.click();
    }
  });
});

// Making the prev and next buttons able to be in focus using tab
document.querySelector('.prev').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    plusSlides(-1);
  }
});

document.querySelector('.next').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    plusSlides(1);
  }
});
