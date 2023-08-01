const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const timer = (deadLine) => {
    const timerDay = document.querySelector('.banner__timer-day');
    const timerHour = document.querySelector('.banner__timer-hour');
    const timerMin = document.querySelector('.banner__timer-min');


    const getTimeRemaning = () => {
        const dataStop = new Date(deadLine).getTime();
        const today = Date.now();
        console.log('today: ', today)
        const timeRemaining = ((dataStop - today) / 1000);

        // const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const hours = Math.floor((timeRemaining / 60 / 60) % 24);
        const days = Math.floor((timeRemaining / 60 / 60 / 24) % 30);
        // const months = Math.floor((timeRemaining / 60 / 60 / 24 / 30) % 12);
        console.log(minutes, hours, days);
        return { timeRemaining, minutes, hours, days }
    }

    const startTimer = () => {

        const timer = getTimeRemaning();
        // const sec = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        const min = declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
        const h = declOfNum(timer.hours, ['час', 'часа', 'часов']);
        const d = declOfNum(timer.days, ['день', 'дня', 'дней']);
        // const m = declOfNum(months, ['месяц', 'месяца', 'месяцев']);
        timerDay.textContent = d;
        timerHour.textContent = h;
        timerMin.textContent = min;

        // timerCount.textContent = `${m}  ${d}  ${h}  ${min}  ${sec}`;

        // if (timer.timeRemaining > 0) {
        //     setTimeout(startTimer, 1000)
        // } else {
        //     timer.remove();
        // }
    }

    startTimer();
}

timer(2023, 8, 8, 0, 0, 0);