let open = document.querySelector('.burger-open');
let close = document.querySelector('.burger-close');
let menu = document.querySelector('.active__list');

const burger = () => {
    open.addEventListener("click", () =>{
        open.classList.add('open');
        menu.style.display = 'flex';
        close.classList.add('close');
    })

    close.addEventListener("click", () =>{
        open.classList.remove('open');
        menu.style.display = 'none';
        close.classList.remove('close');    
    })
}



burger();





