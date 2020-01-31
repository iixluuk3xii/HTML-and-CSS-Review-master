const photos = gallery.querySelectorAll('.gallery-image');
const length = photos.length;
let currentFrame = 1;

const frame1 = photos[0];
const frame2 = photos[1];
const frame3 = photos[2];
const frame4 = photos[3];
const frame5 = photos[4];
const frame6 = photos[5];

const galleryDots = document.querySelectorAll('.gallery-dot');
const galleryControl = document.querySelector('.controls-spacing');

const dot1 = galleryDots[0];
const dot2 = galleryDots[1];
const dot3 = galleryDots[2];
const dot4 = galleryDots[3];
const dot5 = galleryDots[4];
const dot6 = galleryDots[5];

// Carousel Movement functions ----------------------------------------------------------------------

// calculates the offset of the image in the X or Y axis
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
// this function sets the carousel to image 1
function moveCarousleTo0px() {
    for (i = 0; i < photos.length; i++) {
        photos[i].style.transform = 'translateX(0px)';
    }
}
// this function sets the carousel to image 2
function moveCarousleTo1903px() {
    for (i = 0; i < photos.length; i++) {
        photos[i].style.transform = 'translateX(-1903px)';
    }
}
// this function sets the carousel to image 3
function moveCarousleTo3806px() {
    for (i = 0; i < photos.length; i++) {
        photos[i].style.transform = 'translateX(-3806px)';
    }
}
// this function sets the carousel to image 4
function moveCarousleTo5709px() {
    for (i = 0; i < photos.length; i++) {
        photos[i].style.transform = 'translateX(-5709px)';
    }
}
// this function sets the carousel to image 5
function moveCarousleTo7612px() {
    for (i = 0; i < photos.length; i++) {
        photos[i].style.transform = 'translateX(-7612px)';
    }
}
// this function sets the carousel to image 6
function moveCarousleTo9515px() {
    for (i = 0; i < photos.length; i++) {
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
    for (i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove('focus-dot');
    }
    callback()
}

// the main function that controls the carousel nased on which button has been pressed
function moveCarousel(eventTarget) {
    // let eventTarget = event.target;
    if (eventTarget === dot1) {
        if (getOffset(frame1).left === 0) {
            // Do nothing as it is currently the frame on screen
        } else if (getOffset(frame1).left <= -1903 || getOffset(frame1).left >= 1903) {
            moveCarousleTo0px()
            removeFocus(() => addFocus(dot1))
        }
    } else if (event.target === dot2) {
        if (getOffset(frame2).left === 0) {
            // Do nothing as it is currently the frame on screen
        } else if (getOffset(frame2).left <= -1903 || getOffset(frame2).left >= 1903) {
            moveCarousleTo1903px()
            removeFocus(() => addFocus(dot2))
        }
    } else if (event.target === dot3) {
        if (getOffset(frame3).left === 0) {
            // Do nothing as it is currently the frame on screen
        } else if (getOffset(frame3).left <= -1903 || getOffset(frame3).left >= 1903) {
            moveCarousleTo3806px()
            removeFocus(() => addFocus(dot3))
        }
    } else if (eventTarget === dot4) {
        if (getOffset(frame4).left === 0) {
            // Do nothing as it is currently the frame on screen
        } else if (getOffset(frame4).left <= -1903 || getOffset(frame4).left >= 1903) {
            moveCarousleTo5709px()
            removeFocus(() => addFocus(dot4))
        }
    } else if (event.target === dot5) {
        if (getOffset(frame5).left === 0) {
            // Do nothing as it is currently the frame on screen
        } else if (getOffset(frame5).left <= -1903 || getOffset(frame5).left >= 1903) {
                moveCarousleTo7612px()
                removeFocus(() => addFocus(dot5))  
        }
    } else if (event.target === dot6) {
        if (getOffset(frame6).left === 0) {
            // Do nothing as it is currently the frame on screen
        } else if (getOffset(frame6).left >= -1903 || getOffset(frame6).left >= 1903) {
            moveCarousleTo9515px()
            removeFocus(() => addFocus(dot6))
        }
    }
}

// sets the starting translate style of the first image to 0px
frame1.style.transform = 'translateX(0px)';

// the event lsitener for the carousel/gallery buttons
galleryDots.forEach((dot) => {
    dot.addEventListener('click', () => {
        moveCarousel(dot);
    });
});

// this block starts the automatic looping for the carousel and changes the frame every 5 seconds
setInterval(() => {
    if (frame1.style.transform === 'translateX(0px)') {
        moveCarousleTo1903px()
        removeFocus(() => addFocus(dot2))
    } else if (frame1.style.transform === 'translateX(-1903px)') {
        moveCarousleTo3806px()
        removeFocus(() => addFocus(dot3))
    } else if (frame1.style.transform === 'translateX(-3806px)') {
        moveCarousleTo5709px()
        removeFocus(() => addFocus(dot4))
    } else if (frame1.style.transform === 'translateX(-5709px)') {
        moveCarousleTo7612px()
        removeFocus(() => addFocus(dot5))
    } else if (frame1.style.transform === 'translateX(-7612px)') {
        moveCarousleTo9515px()
        removeFocus(() => addFocus(dot6))
    } else if (frame1.style.transform === 'translateX(-9515px)') {
        moveCarousleTo0px()
        removeFocus(() => addFocus(dot1))
    }
}, 5000);