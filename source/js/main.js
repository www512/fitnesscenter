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

//Footer
// let logo = document.getElementById('logo');
// let year = document.querySelector('.license-list__year');

// if (logo && year) {
//   let yearClone = year.cloneNode(true);

//   yearClone.classList.add('footer-year');
//   year.classList.add('footer-year-off');
//   logo.after(yearClone);
// }
