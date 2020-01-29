// HTML Elements
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('#overlay');

// creates the container for the mobile Menu
const slideMenuContainer = document.createElement('div');

// creates the ul that holds each ul in the Menu
const sideMenu = document.createElement('ul');

// creates all the elements within the Training part of the menu
const trainingLi = document.createElement('li');
const trainingUl = document.createElement('ul');
const trainingA = document.createElement('a');
const wdLi = document.createElement('li');
const wdLiA = document.createElement('a');

// creates all the elements within the Company part of the menu
const companyLi = document.createElement('li');
const companyUl = document.createElement('ul');
const companyA = document.createElement('a');
const ocLi = document.createElement('li');
const ocLiA = document.createElement('a');
const ootLi = document.createElement('li');
const ootLiA = document.createElement('a');
const otLi = document.createElement('li');
const otLiA = document.createElement('a');
const ocaLi = document.createElement('li');
const ocaLiA = document.createElement('a');
const obLi = document.createElement('li');
const obLiA = document.createElement('a');
const ogyoLi = document.createElement('li');
const ogyoLiA = document.createElement('a');

// creates all the elements within the Work part of the menu
const workLi = document.createElement('li');
const workUl = document.createElement('ul');
const workA = document.createElement('a');
const csLi = document.createElement('li');
const csLiA = document.createElement('a');
const pLi = document.createElement('li');
const pLiA = document.createElement('a');

// creates all the elements within the knowledge part of the menu
const knowledgeLi = document.createElement('li');
const knowledgeUl = document.createElement('ul');
const knowledgeA = document.createElement('a');
const gLi = document.createElement('li');
const gLiA = document.createElement('a');
const nLi = document.createElement('li');
const nLiA = document.createElement('a');
const iLi = document.createElement('li');
const iLiA = document.createElement('a');

// adds the class sideMenu-container to the mobile menu container
slideMenuContainer.classList.add('sideMenu-container');

// adds the mobile menu into the html at the start of the body
body.prepend(slideMenuContainer);

// adds each Li section to the mobile menu
sideMenu.classList.add('sideMenu');
slideMenuContainer.appendChild(sideMenu);
sideMenu.appendChild(trainingLi);
sideMenu.appendChild(companyLi);
sideMenu.appendChild(workLi);
sideMenu.appendChild(knowledgeLi);

// adds the content into the training section of the menu
trainingLi.classList.add('training');
trainingLi.appendChild(trainingUl);
trainingUl.appendChild(wdLi);
wdLi.appendChild(wdLiA);
wdLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> WEB DEVELOPER COURSE';
trainingLi.insertBefore(trainingA, trainingLi.childNodes[0]);
trainingA.innerHTML = 'TRAINING';

// adds the content into the company section of the menu
companyLi.classList.add('company');
companyLi.appendChild(companyUl);
companyUl.appendChild(ocLi);
ocLi.appendChild(ocLiA);
ocLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> OUR CULTURE';
companyUl.appendChild(ootLi);
ootLi.appendChild(ootLiA);
ootLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> OUR OFFICE TOUR';
companyUl.appendChild(otLi);
otLi.appendChild(otLiA);
otLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> OUR TEAM';
companyUl.appendChild(ocaLi);
ocaLi.appendChild(ocaLiA);
ocaLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> OUR CAREERS';
companyUl.appendChild(obLi);
obLi.appendChild(obLiA);
obLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> OUR BENEFITS';
companyUl.appendChild(ogyoLi);
ogyoLi.appendChild(ogyoLiA);
ogyoLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> &nbsp OUR GREAT YARMOUTH OFFICE';
companyLi.insertBefore(companyA, companyLi.childNodes[0]);
companyA.innerHTML = 'OUR COMPANY';

// adds the content into the work section of the menu
workLi.classList.add('work');
workLi.appendChild(workUl);
workUl.appendChild(csLi);
csLi.appendChild(csLiA);
csLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> CASE STUDIES';
workUl.appendChild(pLi);
pLi.appendChild(pLiA);
pLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> PORTFOLIO';
workLi.insertBefore(workA, workLi.childNodes[0]);
workA.innerHTML = 'OUR WORK';

// adds the content into the knowledge section of the menu
knowledgeLi.classList.add('knowledge');
knowledgeLi.appendChild(knowledgeUl);
knowledgeUl.appendChild(gLi);
gLi.appendChild(gLiA);
gLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> GUIDES';
knowledgeUl.appendChild(nLi);
nLi.appendChild(nLiA);
nLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> NEWS';
knowledgeUl.appendChild(iLi);
iLi.appendChild(iLiA);
iLiA.innerHTML = '<i class="fas fa-angle-double-right"></i> INSIGHTS';
knowledgeLi.insertBefore(knowledgeA, knowledgeLi.childNodes[0]);
knowledgeA.innerHTML = 'OUR KNOWLEDGE';

// the clcik event that triggers the menu to open and fades in the overlay
menuBtn.addEventListener('click', () => {

    viewPort.style.transform = 'translateX(-350px)';
    overlay.style.transform = 'translateX(-350px)';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '1';

});

// the click event that closes the menu and fades out the overlay
overlay.addEventListener('click', () => {

    viewPort.style.transform = 'translateX(0)';
    overlay.style.transform = 'translateX(0)';
    overlay.style.opacity = '0';

    setTimeout(() => {
        overlay.style.zIndex = '-1';
    }, 500);
    
})