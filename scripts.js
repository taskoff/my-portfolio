import {firstSliderInit} from './scripts/slider.js';



firstSliderInit();


const elements = {
    links : document.querySelectorAll('.type-of-work'),
    elSkill : document.querySelectorAll('.skill')
}

let isShowCategories = false;


function addClickListener(el){
    el.forEach(e=>e.addEventListener('click', showCategory));
}
addClickListener(elements.links);



function showCategory(e){
        const projects = document.querySelectorAll('.work-container');
        elements.links.forEach(e=>{
            e.classList.remove('active');
        })
        if(e){
            e.target.classList.add('active');
        }
        projects.forEach(e=>e.classList.add('hidden'));
        let cls = 'all';
        if(e) {

           cls = e.target.getAttribute('value');
        }

        setTimeout(()=>{
            projects.forEach(e=>{
                if(cls==='all'){
                    e.classList.remove('hidden');
                    isShowCategories = true;

                }else if(!e.className.includes(cls)) {
                    e.classList.add('hidden');

                } else {
                    e.classList.remove('hidden');

                };
            })
        }, 300)
}


let position = 0;
window.addEventListener('scroll', checkPosition);

function checkPosition(){
    position = window.scrollY;
    visibleElementsWithPosition(position)
}

function visibleElementsWithPosition(p) {
    if (p > 400 && p < 800) {
        elements.elSkill.forEach(e=>{
            e.classList.add('show')
        })
    }
    if(p > 1000 && !isShowCategories) {
        showCategory()
    }
}

