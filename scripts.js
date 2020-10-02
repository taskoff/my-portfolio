import {firstSliderInit} from './scripts/slider.js';



firstSliderInit();

function showWorkCategories(){
    const links = document.querySelectorAll('.type-of-work');
    links.forEach(e=>e.addEventListener('click', showCategory));
    const projects = document.querySelectorAll('.work-container');

    function showCategory(e){
        links.forEach(e=>{
            e.classList.remove('active');
        })
        e.target.classList.add('active');
        projects.forEach(e=>e.classList.add('hidden'));
        const cls = e.target.getAttribute('value');

        setTimeout(()=>{
            projects.forEach(e=>{
                if(cls==='all'){
                    e.classList.remove('hidden');
                    
                }else if(!e.className.includes(cls)) {
                    e.classList.add('hidden');
                    
                } else {
                    e.classList.remove('hidden');
                    
                };
            })
        }, 300)

        
        
    }
}
showWorkCategories()


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