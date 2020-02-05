
var photos = gallery.querySelectorAll('.gallery-image');
var frame1 = photos[0];
var frame2 = photos[1];
var frame3 = photos[2];
var frame4 = photos[3];
var frame5 = photos[4];
var frame6 = photos[5];

var galleryDots = Array.prototype.slice.call(document.querySelectorAll('.gallery-dot'));
var dot1 = galleryDots[0];
var dot2 = galleryDots[1];
var dot3 = galleryDots[2];
var dot4 = galleryDots[3];
var dot5 = galleryDots[4];
var dot6 = galleryDots[5]; 

// Carousel Movement functions ----------------------------------------------------------------------

// calculates the offset of the image in the X or Y axis
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top
  };
}

// this function sets the carousel to image 1
function moveCarousleTo0px() {
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.transform = '';
  }
} 

// this function sets the carousel to image 2
function moveCarousleTo1903px() {
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.transform = 'translateX(-1903px)';
  }
} 

// this function sets the carousel to image 3
function moveCarousleTo3806px() {
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.transform = 'translateX(-3806px)';
  }
} 

// this function sets the carousel to image 4
function moveCarousleTo5709px() {
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.transform = 'translateX(-5709px)';
  }
} 

// this function sets the carousel to image 5
function moveCarousleTo7612px() {
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.transform = 'translateX(-7612px)';
  }
} 

// this function sets the carousel to image 6
function moveCarousleTo9515px() {
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.transform = 'translateX(-9515px)';
  }
} 

// Carousel Movement functions // ----------------------------------------------------------------------

// adds the focus class to the dot corresponding with that frame of the gallery
function addFocus(dot) {
  dot.classList.add('focus-dot');
} 

// removes the focus class to the dot corresponding with that frame of the gallery
function removeFocus(callback) {
  for (var i = 0; i < galleryDots.length; i++) {
    galleryDots[i].classList.remove('focus-dot');
  }

  callback();
} 

// the main function that controls the carousel nased on which button has been pressed
function moveCarousel(eventTarget) {
  // let eventTarget = event.target; 
  if (eventTarget === dot1) {
    if (getOffset(frame1).left === 0) {
      console.log('first');
      // Do nothing as it is currently the frame on screen
    } else if (getOffset(frame1).left <= -1903 || getOffset(frame1).left >= 1903) {
      console.log('second');
      moveCarousleTo0px();
      removeFocus(function () {
        return addFocus(dot1);
      });
    }
  } else if (event.target === galleryDots[1]) {
    if (getOffset(frame2).left === 0) {
      // Do nothing as it is currently the frame on screen
    } else if (getOffset(frame2).left <= -1903 || getOffset(frame2).left >= 1903) {
      moveCarousleTo1903px();
      removeFocus(function () {
        return addFocus(dot2);
      });
    }
  } else if (event.target === galleryDots[2]) {
    if (getOffset(frame3).left === 0) {
      // Do nothing as it is currently the frame on screen
    } else if (getOffset(frame3).left <= -1903 || getOffset(frame3).left >= 1903) {
      moveCarousleTo3806px();
      removeFocus(function () {
        return addFocus(dot3);
      });
    }
  } else if (eventTarget === galleryDots[3]) {
    if (getOffset(frame4).left === 0) {
      // Do nothing as it is currently the frame on screen
    } else if (getOffset(frame4).left <= -1903 || getOffset(frame4).left >= 1903) {
      moveCarousleTo5709px();
      removeFocus(function () {
        return addFocus(dot4);
      });
    }
  } else if (event.target === galleryDots[4]) {
    if (getOffset(frame5).left === 0) {
      // Do nothing as it is currently the frame on screen
    } else if (getOffset(frame5).left <= -1903 || getOffset(frame5).left >= 1903) {
      moveCarousleTo7612px();
      removeFocus(function () {
        return addFocus(dot5);
      });
    }
  } else if (event.target === galleryDots[5]) {
    if (getOffset(frame6).left === 0) {
      // Do nothing as it is currently the frame on screen
    } else if (getOffset(frame6).left >= -1903 || getOffset(frame6).left >= 1903) {
      moveCarousleTo9515px();
      removeFocus(function () {
        return addFocus(dot6);
      });
    }
  }
} 

// sets the starting translate style of the first image to 0px
frame1.style.transform = 'translateX(0px)'; 

// the event lsitener for the carousel/gallery buttons

// galleryDots.forEach(function (dot) {
//   dot.addEventListener('click', function () {
//     moveCarousel(dot);
//   });
// }); 

galleryDots[0].addEventListener('click', function () {
  moveCarousel(event.target);
});

galleryDots[1].addEventListener('click', function () {
  moveCarousel(event.target);
});

galleryDots[2].addEventListener('click', function () {
  moveCarousel(event.target);
});

galleryDots[3].addEventListener('click', function () {
  moveCarousel(event.target);
});

galleryDots[4].addEventListener('click', function () {
  moveCarousel(event.target);
});

galleryDots[5].addEventListener('click', function () {
  moveCarousel(event.target);
});

// this block starts the automatic looping for the carousel and changes the frame every 5 seconds
setInterval(function () {
  if (frame1.style.transform === 'translateX(0px)') {
    moveCarousleTo1903px();
    removeFocus(function () {
      return addFocus(dot2);
    });
  } else if (frame1.style.transform === 'translateX(-1903px)') {
    moveCarousleTo3806px();
    removeFocus(function () {
      return addFocus(dot3);
    });
  } else if (frame1.style.transform === 'translateX(-3806px)') {
    moveCarousleTo5709px();
    removeFocus(function () {
      return addFocus(dot4);
    });
  } else if (frame1.style.transform === 'translateX(-5709px)') {
    moveCarousleTo7612px();
    removeFocus(function () {
      return addFocus(dot5);
    });
  } else if (frame1.style.transform === 'translateX(-7612px)') {
    moveCarousleTo9515px();
    removeFocus(function () {
      return addFocus(dot6);
    });
  } else if (frame1.style.transform === 'translateX(-9515px)') {
    moveCarousleTo0px();
    removeFocus(function () {
      return addFocus(dot1);
    });
  }
}, 5000);