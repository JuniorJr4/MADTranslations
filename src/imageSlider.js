const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = slider.querySelectorAll('li');
const dotsContainer = document.querySelector('.slider-dots');
let currentIndex = 0;

function showSlide(index) {
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // show the slide at the given index
  slides[index].style.display = 'block';
  updateActiveDot(index);
}

function goToSlide(index) {
  // update the current index
  currentIndex = index;
  // show the slide at the new index
  showSlide(currentIndex);
  
}

function goToNextSlide() {
  // go to the next slide (loop back to the start if at the end)
  if (currentIndex === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
}

function goToPrevSlide() {
  // go to the previous slide (loop back to the end if at the start)
  if (currentIndex === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

function updateActiveDot(index) {
    // remove the active class from all dots
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    // add the active class to the dot at the given index
    dots[index].classList.add('active');
  }
  
  // create a dot for each slide
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('slider-dot');
    // set the active class on the first dot
    if (i === 0) {
      dot.classList.add('active');
    }
    // add a click event listener to go to the corresponding slide
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  }






// show the first slide by default
showSlide(currentIndex);

// add click event listeners to the buttons
prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);
