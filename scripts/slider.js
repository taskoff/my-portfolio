function firstSliderInit() {


    const elements = {
        images: document.querySelectorAll('.first .img-box'),
        leftArrow : document.querySelector('.first .arrow.left'),
        rightArrow : document.querySelector('.first .arrow.right'),
        
    }
    let isClick = false;
    let activeId = 0;
    const activeEl = elements.images[0];
    const activeClass = 'active';
    const hiddenClass = 'hidden';
    activeEl.classList.add(activeClass);
    activeEl.classList.remove(hiddenClass);

    
    
    elements.leftArrow.addEventListener('click', showPreviousImg);

    function showPreviousImg() {
        isClick = true;
        if(activeId>0) {
            moveImg('-')
        }
    }

    elements.rightArrow.addEventListener('click', showNextImg);

    function showNextImg() {
        isClick = true;
        if(activeId<elements.images.length-1) {
            moveImg('+')
        }
    }

    function moveImg(p) {
        elements.images[activeId].classList.remove(activeClass);
        elements.images[activeId].classList.add(hiddenClass);

        setTimeout(()=>{
            if(p === '-'){
                // elements.images[activeId-1].classList.add(activeClass);
                // elements.images[activeId-1].classList.remove(hiddenClass);
                addActiveClass(activeId-1);
    
                activeId -=1;
            } else if (p === '+') {
                // elements.images[activeId+1].classList.add(activeClass);
                // elements.images[activeId+1].classList.remove(hiddenClass);
                addActiveClass(activeId+1);
    
                activeId +=1;
            }

            checkArrowShow();
        }, 800)
    }

    function checkArrowShow() {
        const elClass = 'hidden'
        if(activeId === 0) {
            elements.leftArrow.classList.add(elClass)
        } else {
            elements.leftArrow.classList.remove(elClass);
        }
        
        if(activeId === elements.images.length-1) {
            elements.rightArrow.classList.add(elClass)
        } else {
            elements.rightArrow.classList.remove(elClass)
        }
        activateBullet()
    }
    function addBulletEements(){
        const bulletsBox = document.querySelector('.bullets-container-first');
        elements.images.forEach((e, i)=>{
            const bullet = document.createElement('div');
            bullet.classList.add(`bullet`);
            bullet.classList.add(`bullet-${i}`);
            bullet.addEventListener('click', loadImg)
            bulletsBox.appendChild(bullet);
        })
        activateBullet();
    }
    addBulletEements()

    function activateBullet(){
        const bullets = document.querySelectorAll('.bullets-container-first .bullet');
        bullets.forEach(e=>{
            if(e.classList.contains(activeClass)) {
                e.classList.remove(activeClass);
            }
        })
        bullets[activeId].classList.add(activeClass);
    }
    
    function loadImg(e) {
        const el = e.target;
        if(!el.classList.contains(activeClass)){
            const id = el.className[el.className.length - 1]
            const bullets = document.querySelectorAll('.bullets-container-first .bullet');

            bullets[activeId].classList.remove(activeClass);
            // elements.images[activeId].classList.remove(activeClass);
            // elements.images[activeId].classList.add(hiddenClass);
            removeActiveClass(activeId);
            
            activeId = Number(id);
            // elements.images[activeId].classList.add(activeClass);
            // elements.images[activeId].classList.remove(hiddenClass);
            addActiveClass(activeId);

            el.classList.add(activeClass);

            checkArrowShow()
        }
        
    }

    function addActiveClass(actId){
            elements.images[actId].classList.add(activeClass);
            elements.images[actId].classList.remove(hiddenClass);
            console.log(elements.images[actId])
    }
    function removeActiveClass(actId){
        elements.images[actId].classList.remove(activeClass);
        elements.images[actId].classList.add(hiddenClass);
}


};

export  {
    firstSliderInit
}