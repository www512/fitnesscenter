'use strict';

const esc = 27;

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
