require("@babel/core").transform("code", options);

const overflow = document.querySelector('.overflow');
const gallery = document.querySelector('.gallery');
const header = document.querySelector('#header');
const viewPort = document.querySelector('#viewport');
let position = viewPort.scrollTop;


function slideElementDown(element) {
    setTimeout(() => {
        element.style.transform = "";
        element.style.transition = "transform 0.25s";
    }, 200);
}

function slideElementUp(element, callback) {
    setTimeout(() => {
        element.style.transform = "translateY(-211.59px)";
        element.style.transition = "transform 0.25s";
    }, 200);
    callback();
}

function makeElementSticky(element) {
    setTimeout(() => {
        element.style.position = 'sticky';
        element.style.top = '0';
    }, 450);
}

function removeElementSticky(element) {
    element.style.position = 'static';
}

function hideElement(element) {
    element.style.display = 'hidden';
}

function ShowElement(element) {
    element.style.display = 'block';
}

viewPort.addEventListener('scroll', () => {

    let scroll = viewPort.scrollTop;

    // if scrolling down move the header into the hidden part of the overflow div
    if (scroll > position) {
        if (scroll > 300) {
            slideElementUp(header, () => makeElementSticky(overflow))
        }
    }
    // if scrolling up slide the header into frame
    else if (scroll < position) {
        slideElementDown(header)
        if (scroll === 0) {
            removeElementSticky(overflow)
        }
    }

    position = scroll;

});