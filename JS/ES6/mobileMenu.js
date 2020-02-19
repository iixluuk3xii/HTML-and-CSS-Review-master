// HTML Elements
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('#overlay');
const viewPort = document.querySelector('#viewport');

function setZindexBefore(element, value, callback) {
    element.style.zIndex = value;
    callback()
}

function setZindexAfter(element, value) {
    setTimeout(() => {
        element.style.zIndex = value;
    }, 500);
}

function setOpacity(element, value, callback) {
    element.style.opacity = value;
    callback()
}

function toggleSlide(element1, element2) {
    element1.classList.toggle("menu-slide");
    element2.classList.toggle("menu-slide");
}

// the clcik event that triggers the menu to open and fades in the overlay
menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('is-active');
    toggleSlide(viewPort, overlay)
    setZindexBefore(overlay, '1000', () => setOpacity(overlay, '1'));
});

// the click event that closes the menu and fades out the overlay
overlay.addEventListener('click', () => {
    menuBtn.classList.remove('is-active');
    toggleSlide(viewPort, overlay)
    setOpacity(overlay, '0', () => setZindexAfter(overlay, '-1')); 
})

