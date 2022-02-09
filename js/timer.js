const declOfNum = (n, titles) => {
    return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
        0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}


const timer =  () => {
    
    const timer = document.createElement('div');
    const timerTitle = document.createElement('p');
    const timerCount = document.createElement('span');
    
    timer.classList.add('timer');
    timerTitle.classList.add('timer__title');
    timerCount.classList.add('timer__count');
    
    timerTitle.textContent = 'До конца распродажи осталось: ';
    
    timerTitle.append(timerCount);
    timer.append(timerTitle)
    document.body.append(timer);


    const startTimer = () => {
        const deadline = new Date(2022, 1, 13, 20, 15, 17 );
        const now = new Date();
        const diff = deadline - now;

        const days = Math.floor( diff / 1000 / 60 / 60 / 24 );
        const hours = Math.floor( diff / 1000 / 60 / 60 ) % 24;
        const minutes = Math.floor( diff / 1000 / 60 ) % 60;
        const seconds = Math.floor( diff / 1000  ) %60;

        const s  = declOfNum(seconds, ['секунда' , 'секунди', 'секунд'])
        const m  = declOfNum(minutes, ['минута' , 'минути', 'минут'])
        const h  = declOfNum(hours , ['час' , 'часа', 'часов'])
        const  d = declOfNum(days, ['день' , 'дня', 'дней'])


        timerCount.textContent = `${d} ${h} ${m} ${s}`;


        setTimeout(startTimer, 1000);
    }

    startTimer();

};


timer();