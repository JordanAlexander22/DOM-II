// Your code goes here

//Mouse over event

const navi = document.querySelectorAll('.nav-link')

navi.forEach(element => {
    element.addEventListener('mouseover', function (event) {
        event.target.style.color = 'red';
    })
})

//Down Key event
const input = document.querySelector("input")
const logo = document.querySelector(".logo-heading")

input.addEventListener('keydown', downK);

function downK() {
    logo.textContent = 'NEW LOGO'
    logo.style.color = 'blue'
}

//Wheel Event

const busImage = document.querySelector('.sand');

busImage.addEventListener('wheel', doIt);

function doIt() {
    busImage.style.display = 'none';
}

// Load Event
const load = document.querySelector('.loaded')

window.addEventListener('load', loading)

function loading() {
    load.textContent = 'Page Fully Loaded!'
}

// Focus Event

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});

// Resize event

window.addEventListener('resize', reportWindowSize);

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// Scroll Event (see in the console)

window.addEventListener('scroll', () => {
    console.log('Scrolled')
})

//Select event

var par = document.querySelector('#story');

par.addEventListener('select', () => {
    alert('Text selected')
});

//dblclick event

var dblclick = document.querySelector('.main-navigation');

dblclick.addEventListener('dblclick', dbl)

function dbl(){
    dblclick.style.background = 'red'
}

// Drag/Drop

var draggableBTN = document.querySelector('.draggable')
var dropeZone = document.querySelector('.dropzone')

// Two similar events nested.

const button = document.querySelector('.select')
const buttonParent = document.querySelector(".text-content")
const sectionContent = document.querySelector(".content-section")

button.addEventListener('click', () => {
    console.log('Button Pressed')
})

buttonParent.addEventListener('click', eve => {
    eve.stopPropagation();
    console.log('Parrent triggered');
})

//Event stopt
sectionContent.addEventListener('click',() => {
    console.log('Section Content triggered!')
})
