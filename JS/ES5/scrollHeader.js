var overflow = document.querySelector('.overflow');
var gallery = document.querySelector('.gallery');
var header = document.querySelector('#header');
var viewPort = document.querySelector('#viewport');
var position = viewPort.scrollTop;

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

function slideElementDown(element) {
  setTimeout(function () {
    element.style.transform = "";
    element.style.transition = "transform 0.25s";
  }, 200);
}

function slideElementUp(element, callback) {
  setTimeout(function () {
    element.style.transform = "translateY(-211.59px)";
    element.style.transition = "transform 0.25s";
  }, 200);
  callback();
}

function makeElementSticky(element) {
  setTimeout(function () {
    element.style.position = 'sticky';
    element.style.top = '0';
  }, 450);
}

function makeElementFixed(element) {
  setTimeout(function () {
    element.style.position = 'fixed';
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

// If Internet Explorer
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

    overflow.style.width = (screen.width - 17) + 'px';

    viewPort.addEventListener('scroll', function () {
      var scroll = viewPort.scrollTop; // if scrolling down move the header into the hidden part of the overflow div
    
      if (scroll > position) {
        if (scroll > 300) {
          slideElementUp(header, function () {
            makeElementFixed(overflow);
            setTimeout(function () {
              gallery.style.marginTop = '211.59px';
            }, 450);
            
          });
        }
      } // if scrolling up slide the header into frame
      else if (scroll < position) {
          slideElementDown(header);
    
          if (scroll === 0) {
            gallery.style.marginTop = '';
            removeElementSticky(overflow);
          }
        }
    
      position = scroll;
    });
} else {
  viewPort.addEventListener('scroll', function () {
    var scroll = viewPort.scrollTop; // if scrolling down move the header into the hidden part of the overflow div
  
    if (scroll > position) {
      if (scroll > 300) {
        slideElementUp(header, function () {
          return makeElementSticky(overflow);
        });
      }
    } // if scrolling up slide the header into frame
    else if (scroll < position) {
        slideElementDown(header);
  
        if (scroll === 0) {
          removeElementSticky(overflow);
        }
      }
  
    position = scroll;
  });
}
  
