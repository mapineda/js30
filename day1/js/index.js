'use strict'

module exports = function () {

  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keycode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);

  });
}
