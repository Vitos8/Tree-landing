

let modalWindow = function () {
    let modal = document.querySelector('.modal');
    let btn = document.querySelector('.modal-btn');
    let closeBtn = document.querySelector('.modal__close');
    let btn1= document.querySelector('.main__btn-title');
    let btn2= document.querySelector('.main__btn-img');
    let btn3= document.querySelector('.tree__buttons-detailed')

    btn1.addEventListener('click', () => {
        modal.classList.add('modal-active');
    } )

    btn2.addEventListener('click', () => {
        modal.classList.add('modal-active');
    } )
    
    btn3.addEventListener('click', () => {
        modal.classList.add('modal-active');
    } )



    btn.addEventListener('click', () => {
        modal.classList.add('modal-active');
    } )

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal-active');
    } )
};

modalWindow();