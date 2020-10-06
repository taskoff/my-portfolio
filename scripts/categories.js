const elements = {
    links : document.querySelectorAll('.type-of-work'),
    elSkill : document.querySelectorAll('.skill')
};

let isShowCategories = false;
const activeCls = 'active';
const hiddenCls = 'hidden';

function addClickListener(el){
    el.forEach(e=>e.addEventListener('click', showCategory));
};
addClickListener(elements.links);



function showCategory(e){
        const projects = document.querySelectorAll('.work-container');
        if(e){
            elements.links.forEach(e=>{
                e.classList.remove(activeCls);
        })
            e.target.classList.add(activeCls);
        }
        projects.forEach(e=>e.classList.add(hiddenCls));
        let cls = 'all';
        if(e) {

           cls = e.target.getAttribute('value');
        }

        setTimeout(()=>{
            projects.forEach(e=>{
                if(cls==='all'){
                    e.classList.remove(hiddenCls);
                    isShowCategories = true;

                }else if(!e.className.includes(cls)) {
                    e.classList.add(hiddenCls);

                } else {
                    e.classList.remove(hiddenCls);

                };
            })
        }, 300)
};


let position = 0;


function checkPosition(){
    position = window.scrollY;
    visibleElementsWithPosition(position)
};

function visibleElementsWithPosition(p) {
    if (p > 400 && p < 900) {
        elements.elSkill.forEach(e=>{
            e.classList.add('show')
        })
    }
    if(p > 1200 && !isShowCategories) {
        showCategory()
    }
};

export {
    checkPosition
}