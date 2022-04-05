(function(){
  'use strict';

  const panel = document.querySelector('.panel');
  const splitter = document.querySelector('.splitter');

  let isDragging = false;

  document.body.addEventListener('mousedown', function(event) {
    if (event.target === splitter) {
      isDragging = true;
    }
  }, true);
  document.body.addEventListener('mouseup', function() {
    isDragging = false;
  }, true);
  document.body.addEventListener('mousemove', function(event) {
    if (!isDragging) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    panel.style.top = event.clientY + 'px';
  }, true);

}());
