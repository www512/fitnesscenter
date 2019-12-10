'use strict';

const esc = 27;

//Scroll
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 400,
      framesCount = 30;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

//Mask in a modal window on a phone number
let phone = document.getElementById('phone');

if (phone) {
  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  let maskForm = IMask(phone, maskOptions);
}

//Input reset
let form = document.querySelector('.filter');

if (form) {
  form.addEventListener('keydown', function(evt) {
    if (evt.keyCode === esc) {
      evt.target.value = "";
    }
  });
}

//Slider review
var reviewSlides = document.querySelectorAll('.review__item');
var reviewCurrentSlide = 0;
var reviewButtonPrevious = document.querySelector('.review__list-slider-prev');
var reviewButtonNext = document.querySelector('.review__list-slider-next');

reviewButtonPrevious.onclick = function() {
  reviewPreviousSlide();
};

reviewButtonNext.onclick = function() {
  reviewNextSlide();
};

function reviewPreviousSlide() {
  reviewSlides[reviewCurrentSlide].classList.remove("showing");
  goToReviewSlide(reviewCurrentSlide - 1);
}

function reviewNextSlide() {
  reviewSlides[reviewCurrentSlide].classList.remove("showing");
  goToReviewSlide(reviewCurrentSlide + 1);
}

function goToReviewSlide(n) {
  reviewCurrentSlide = (n + reviewSlides.length) % reviewSlides.length;
  reviewSlides[reviewCurrentSlide].classList.add("showing");
}


// reviewCurrentSlide.classList.remove("showing");
