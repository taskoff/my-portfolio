
function showWork() {
    const works = document.querySelectorAll('.search-icon-wrapper');
    works.forEach(e=>{e.addEventListener('click', currentWork)})
    
    
}

function currentWork(e) {

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
    }
}


export {
    showWork
}

