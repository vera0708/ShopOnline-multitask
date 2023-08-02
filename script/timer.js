const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const addZero = (n) => n < 10 ? '0' + n : n;

const timer = () => {
    let deadL = document.querySelector('[data-timer-deadline]');
    let deadLine = deadL.dataset.timerDeadline;
    const bannerTimer = document.querySelector('.banner__timer-time');
    const timerDay = document.querySelector('.banner__timer-day');
    const timerHour = document.querySelector('.banner__timer-hour');
    const timerMin = document.querySelector('.banner__timer-min');

    const timerSec = document.createElement('p');
    const timeSecCount = document.createElement('span');
    timerSec.classList.add('.banner__timer-sec');
    timeSecCount.classList.add('.banner__timer-big');
    timerSec.textContent = 'секунд';
    timeSecCount.textContent = '00';
    timerSec.append(timeSecCount);

    console.log(deadLine);
    const getTimeRemaning = () => {
        const dataStop = new Date(deadLine).getTime();
        console.log('dataStop', dataStop);
        // const today = new Date();
        const today = Date.now();
        const timeRemaining = ((dataStop - today) / 1000);

        // const seconds = Math.floor(timeRemaining % 60);
        const minutes = addZero(Math.floor((timeRemaining / 60) % 60));
        const hours = addZero(Math.floor((timeRemaining / 60 / 60) % 24));
        const days = addZero(Math.floor((timeRemaining / 60 / 60 / 24) % 30));
        // const months = Math.floor((timeRemaining / 60 / 60 / 24 / 30) % 12);
        console.log(days, hours, minutes);
        return { timeRemaining, minutes, hours, days }
    }

    const startTimer = () => {
        const timer = getTimeRemaning();
        // const monthContent = declOfNum(months, ['месяц', 'месяца', 'месяцев']);
        const dayContent = declOfNum(timer.days, ['день', 'дня', 'дней']);
        const hourContent = declOfNum(timer.hours, ['час', 'часа', 'часов']);
        const minContent = declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
        // const secContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

        timerDay.textContent = dayContent;
        timerHour.textContent = hourContent;
        timerMin.textContent = minContent;
        // timerSec.textContent = secContent;

        const intervalId = setTimeout(startTimer, 1000);
        // timerCount.textContent = `${m}  ${d}  ${h}  ${min}  ${sec}`;

        if (timer.timeRemaining <= 0) {
            clearTimeout(intervalId);
            bannerTimer.remove();
        }
    };
    startTimer();
};

timer();
// timer('August 7 2023 00:00:00');