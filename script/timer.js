// import { addZero, declOfNum } from "./utilites.js";
const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const addZero = (n) => n < 10 ? '0' + n : n;

const timer = () => {
    let deadL = document.querySelector('[data-timer-deadline]');
    let deadLine = deadL.dataset.timerDeadline;
    const bannerTimer = document.querySelector('.banner__timer');
    const timerFirst = document.querySelector('.banner__timer-day');
    const timerSecond = document.querySelector('.banner__timer-hour');
    const timerThird = document.querySelector('.banner__timer-min');

    console.log('deadLine: ', deadLine);

    const getTimeRemaning = () => {
        const dataStop = new Date(deadLine).getTime();

        const dataStopDate = new Date(deadLine);
        const dataStopGMT = dataStop - ((dataStopDate.getTimezoneOffset()) * 60 * 1000);
        // const dataStopGMText = dataStopX.toGMTString();

        // const today = Date.now();
        const today = new Date();

        // Расчёт по местному времени:
        // const timeRemaining = ((dataStop - today) / 1000);
        // console.log('timeRemaining: ', timeRemaining);
        // const seconds = Math.floor(timeRemaining % 60);
        // const minutes = addZero(Math.floor((timeRemaining / 60) % 60));
        // const hours = addZero(Math.floor((timeRemaining / 60 / 60) % 24));
        // const days = addZero(Math.floor((timeRemaining / 60 / 60 / 24) % 30));
        // const months = Math.floor((timeRemaining / 60 / 60 / 24 / 30) % 12);

        // Расчёт по Гринвичу :
        const timeRemainingGMT = ((dataStopGMT - today) / 1000);
        const seconds = Math.floor(timeRemainingGMT % 60);
        const minutes = addZero(Math.floor((timeRemainingGMT / 60) % 60));
        const hours = addZero(Math.floor((timeRemainingGMT / 60 / 60) % 24));
        const days = addZero(Math.floor((timeRemainingGMT / 60 / 60 / 24) % 30));

        console.log(days, hours, minutes);
        return { timeRemainingGMT, minutes, hours, days, seconds }
    }

    const startTimer = () => {
        const timer = getTimeRemaning();
        // const monthContent = declOfNum(months, ['месяц', 'месяца', 'месяцев']);
        const dayContent = declOfNum(timer.days, ['день', 'дня', 'дней']);
        const hourContent = declOfNum(timer.hours, ['час', 'часа', 'часов']);
        const minContent = declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
        const secContent = declOfNum(timer.seconds, ['секунда', 'секунды', 'секунд']);

        if (timer.days >= 1) {
            timerFirst.textContent = dayContent;
            timerSecond.textContent = hourContent;
            timerThird.textContent = minContent;
        } else {
            timerFirst.textContent = hourContent;
            timerSecond.textContent = minContent;
            timerThird.textContent = secContent;
        }

        const intervalId = setTimeout(startTimer, 1000);

        if (timer.timeRemainingGMT <= 0) {
            clearTimeout(intervalId);
            bannerTimer.remove();
        }
    };
    startTimer();
};

timer();
// timer('August 7 2023 00:00:00');