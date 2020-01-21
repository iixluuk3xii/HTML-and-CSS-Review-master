const overflow = document.querySelector('.overflow');
const gallery = document.querySelector('.gallery');
const header = document.querySelector('.header');
let position = document.documentElement.scrollTop;

const fixToWindow = (element) => {
    if (window.scrollY > 260) {
        element.classList.add("fix");
        element.style.height = "256.56px";
    } else {
        element.classList.remove("fix");
        element.style.height = "";
      

    }
}

const toggleTopMargin = (element) => {
    if (window.scrollY > 260) {
        element.classList.add("margin");
    } else {
        element.classList.remove("margin");
    }
}

document.addEventListener('scroll', () => {

    var scroll = document.documentElement.scrollTop;

    fixToWindow(overflow);
    toggleTopMargin(gallery);

    if (scroll > position && window.scrollY > 256) {
        console.log('down');
        setTimeout(() => {
            header.style.transform = "translateY(-211.59px)";
            header.style.transition = "transform 0.25s";
        }, 200);
    } else {
        console.log('up');
        setTimeout(() => {
            header.style.transform = "translateY(0px)";
            header.style.transition = "transform 0.25s";
        }, 200);
        
    }



    position = scroll;

});

