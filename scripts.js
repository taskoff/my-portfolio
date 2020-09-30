import {firstSliderInit} from './scripts/slider.js';



firstSliderInit();


let position = 0;


// window.addEventListener('scroll', checkPosition);


function doSomething(position) {
    if (position > 500) {
        console.log('We are here.......')
        
    }
}


function checkPosition(){
    console.log(window.scrollY)
    position = window.scrollY;
    doSomething(position)
}