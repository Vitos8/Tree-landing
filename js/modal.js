let modal = document.querySelector('.modal');
let btn = document.querySelectorAll('.modal-btn');
let closeBtn = document.querySelector('.modal__close-img');

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('modal-active');
    } )
})

modal.addEventListener('click', el => {
    const target = el.target;
    if (target == modal || target == closeBtn ) {
        modal.classList.remove('modal-active');
    }
} )




