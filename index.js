(function(){
  'use strict';

  // pointerdown
  // pointermove
  // pointerup

  const panel = document.querySelector('.panel');
  const splitter = document.querySelector('.splitter');

  const isTouch = navigator.maxTouchPoints > 1;

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

    const y = isTouch ? event.touches[0].clientY : event.clientY;

    console.log(event.clientY);
    console.log(event.touches[0]);
    console.log(event.changedTouches[0]);

    panel.style.top = y + 'px';
  }

  document.body.addEventListener(isTouch ? 'touchstart' : 'mousedown', onDown, true);
  document.body.addEventListener(isTouch ? 'touchend' : 'mouseup', onUp, true);
  document.body.addEventListener(isTouch ? 'touchmove' : 'mousemove', onMove, { capture: true, passive: false });
}());
