
function showWork() {
    const works = document.querySelectorAll('.search-icon-wrapper');
    works.forEach(e=>{e.addEventListener('click', currentWork)})
    
    
}

let isActive = false;

function currentWork(e) {
    
    if (isActive || window.screen.availWidth < 769) {
        return
    }
    isActive = true;
    const el = e.target;
    let parent = '';
    if (el.classList.contains('fa')) {
        parent = el.parentElement;
        parent=parent.parentElement;
    } else {
        parent = el.parentElement;
    }
    parent.classList.add('active');
    const btn = parent.querySelector('.close-btn');
    btn.addEventListener('click', closeWork)
    function closeWork() {
        parent.classList.remove('active');
        isActive = false;
    }
}


export {
    showWork
}

