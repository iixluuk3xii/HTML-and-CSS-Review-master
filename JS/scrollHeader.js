const overflow = document.querySelector('.overflow');
const gallery = document.querySelector('.gallery');
const header = document.querySelector('#header');
let position = document.documentElement.scrollTop;

// on Scroll reveal the sticky browser when past the original header 

document.addEventListener('scroll', () => {

    var scroll = document.documentElement.scrollTop;

    // if scrolling down move the header into the hidden part of the overflow div
    if (scroll > position) {
        overflow.style.height = "256.56px";
        setTimeout(() => {
            header.style.transform = "translateY(-211.59px)";
            header.style.transition = "transform 0.25s";
        }, 200);
        if (position >= 310) {
            setTimeout(() => {
                overflow.style.visibility = "visible";
            }, 500);
        }
    }
    // if scrolling up slide the header into frame 
    else if (scroll < position) {
        setTimeout(() => {
            header.style.transform = "translateY(0px)";
            header.style.transition = "transform 0.25s";
        }, 200);
        if (position <= 5) {
            overflow.style.visibility = "hidden";
        }
    }

    position = scroll;

});

