const overflow = document.querySelector('.overflow');
const gallery = document.querySelector('.gallery');
const header = document.querySelector('.header');
let position = document.documentElement.scrollTop;

const fixToWindow = (element) => {
    if (window.scrollY > 257) {
        element.classList.add("fix");
        overflow.style.height = "256.56px";

    } else if (window.scrollY <= 257) {
        element.classList.remove("fix");
        overflow.style.height = "";
        
    }
}

const toggleTopMargin = (element) => {
    if (window.scrollY > 257) {
        element.classList.add("margin");
    } else {
        element.classList.remove("margin");
    }

}

const pushElementUp = (element) => {
    if (window.scrollY > 257) {
        element.classList.add("top");
        element.style.transform = "translateY(-211.59px)"
    } else if (window.scrollY > 0) {
        element.style.transform = "translateY(0)"
    }
}

document.addEventListener('scroll', () => {
    
    var scroll = document.documentElement.scrollTop;
        
    fixToWindow(overflow);
    toggleTopMargin(gallery);
    pushElementUp(header);

    if (scroll > position && window.scrollY > 256) {
        console.log('down');
        header.style.transform = "translateY(-211.59px)";
        header.style.transition = "transform 0.25s";
      } else {
        console.log('up');
        header.style.transform = "translateY(0px)";
        header.style.transition = "transform 0.25s";
        
      }

    position = scroll;

});

