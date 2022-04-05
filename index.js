(function(){
  'use strict';

  // pointerdown
  // pointermove
  // pointerup

  const panel = document.querySelector('.panel');
  const splitter = document.querySelector('.splitter');

  let isDragging = false;

  function onDown(event) {
    if (event.target === splitter) {
      isDragging = true;
    }
  }

  function onUp() {
    isDragging = false;
  }

  function onMove(event) {
    if (!isDragging) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    panel.style.top = event.clientY + 'px';
  }

  const isTouch = navigator.maxTouchPoints > 1;

  document.body.addEventListener(isTouch ? 'touchstart' : 'mousedown', onDown, true);
  document.body.addEventListener(isTouch ? 'touchend' : 'mouseup', onUp, true);
  document.body.addEventListener(isTouch ? 'touchmove' : 'mousemove', onMove, true);

}());
