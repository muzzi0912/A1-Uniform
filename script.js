 
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navLi = document.querySelector('.list-mob');

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    navLi.classList.add('navOpened');
})
closeBtn.addEventListener('click', e => {
    e.preventDefault();
    navLi.classList.remove('navOpened');
})
addEventListener('resize', () => {
    if(innerWidth > 991){
        if(navLi.classList.contains('navOpened')){
            navLi.classList.remove('navOpened');
        }
    }
})

