'use strict';

const esc = 27;
const laptop = 1200;
const mobile = 767;

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
let reviewSlides = document.querySelectorAll('.review__item');
let reviewCurrentSlide = 0;
let reviewButtonPrevious = document.querySelector('.review__list-slider-prev');
let reviewButtonNext = document.querySelector('.review__list-slider-next');

reviewButtonPrevious.onclick = function() {
  reviewPreviousSlide();
};

reviewButtonNext.onclick = function() {
  reviewNextSlide();
};

function reviewPreviousSlide() {
  reviewSlides[reviewCurrentSlide].classList.remove("review__showing");
  goToReviewSlide(reviewCurrentSlide - 1);
}

function reviewNextSlide() {
  reviewSlides[reviewCurrentSlide].classList.remove("review__showing");
  goToReviewSlide(reviewCurrentSlide + 1);
}

function goToReviewSlide(n) {
  reviewCurrentSlide = (n + reviewSlides.length) % reviewSlides.length;
  reviewSlides[reviewCurrentSlide].classList.add("review__showing");
}

//Slider trainer
let trainerSlides = document.querySelectorAll('.trainer__item');
let trainerCurrentSlide = 0;
let trainerButtonPrevious = document.querySelector('.trainer__list-slider-prev');
let trainerButtonNext = document.querySelector('.trainer__list-slider-next');

function displayWindowSize(){
  let resolution = document.documentElement.clientWidth;
  if (resolution > laptop) {
    for(let i = 1; i < 4; i++) {
      trainerSlides[i].classList.add("trainer__showing");
    }

    function onArray() {
      let i = trainerCurrentSlide;
      let k = trainerCurrentSlide + 4;
      for(i; i < k; i++) {
        trainerSlides[i].classList.remove("trainer__showing");
      }
    }

    trainerButtonPrevious.onclick = function() {
      trainerPreviousSlide();
    };

    trainerButtonNext.onclick = function() {
      trainerNextSlide();
    };

    function trainerPreviousSlide() {
      onArray();
      trainerCurrentSlide -= 4;
      goToPreviousTrainerSlide(trainerCurrentSlide);
    }

    function trainerNextSlide() {
      onArray();
      trainerCurrentSlide += 4;
      goToNextTrainerSlide(trainerCurrentSlide);
    }

    function goToNextTrainerSlide(n) {
      let arrayNumber = n + 4;
      if (arrayNumber > trainerSlides.length) {
        trainerCurrentSlide = 0;
        n = 0;
      }
      let k = n + 4;
      for(n; n < k; n++) {
        trainerSlides[n].classList.add("trainer__showing");
      }
      arrayNumber = 0;
    }

    function goToPreviousTrainerSlide(n) {
      if (n < 0) {
        n = trainerSlides.length - 4;
        trainerCurrentSlide = trainerSlides.length - 4;
      }
      let k = n + 4;
      for(n; n < k; n++) {
        trainerSlides[n].classList.add("trainer__showing");
      }
    }
  } else if (resolution <= laptop && resolution > mobile) {
    trainerCurrentSlide = 2;
    trainerSlides[0].classList.remove("trainer__showing");
    trainerSlides[2].classList.add("trainer__showing");
    trainerSlides[3].classList.add("trainer__showing");

    function onArray() {
      let i = trainerCurrentSlide;
      let k = trainerCurrentSlide + 2;
      for(i; i < k; i++) {
        trainerSlides[i].classList.remove("trainer__showing");
      }
    }

    trainerButtonPrevious.onclick = function() {
      trainerPreviousSlide();
    };

    trainerButtonNext.onclick = function() {
      trainerNextSlide();
    };

    function trainerPreviousSlide() {
      onArray();
      trainerCurrentSlide -= 2;
      goToPreviousTrainerSlide(trainerCurrentSlide);
    }

    function trainerNextSlide() {
      onArray();
      trainerCurrentSlide += 2;
      goToNextTrainerSlide(trainerCurrentSlide);
    }

    function goToNextTrainerSlide(n) {
      let arrayNumber = n + 2;
      if (arrayNumber > trainerSlides.length) {
        trainerCurrentSlide = 0;
        n = 0;
      }
      let k = n + 2;
      for(n; n < k; n++) {
        trainerSlides[n].classList.add("trainer__showing");
      }
      arrayNumber = 0;
    }

    function goToPreviousTrainerSlide(n) {
      if (n < 0) {
        n = trainerSlides.length - 2;
        trainerCurrentSlide = trainerSlides.length - 2;
      }
      let k = n + 2;
      for(n; n < k; n++) {
        trainerSlides[n].classList.add("trainer__showing");
      }
    }

  } else {
      trainerCurrentSlide = 2;
      trainerSlides[0].classList.remove("trainer__showing");
      trainerSlides[2].classList.add("trainer__showing");
      trainerButtonPrevious.onclick = function() {
      trainerPreviousSlideMobile();
    };

    trainerButtonNext.onclick = function() {
      trainerNextSlideMobile();
    };

    function trainerPreviousSlideMobile() {
      trainerSlides[trainerCurrentSlide].classList.remove("trainer__showing");
      goToTrainerSlideMobile(trainerCurrentSlide - 1);
    }

    function trainerNextSlideMobile() {
      trainerSlides[trainerCurrentSlide].classList.remove("trainer__showing");
      goToTrainerSlideMobile(trainerCurrentSlide + 1);
    }

    function goToTrainerSlideMobile(n) {
      trainerCurrentSlide = (n + trainerSlides.length) % trainerSlides.length;
      trainerSlides[trainerCurrentSlide].classList.add("trainer__showing");
    }
  }
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();
