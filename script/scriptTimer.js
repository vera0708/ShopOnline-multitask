import { timer } from "./timer.js";

const scriptTimer = () => {
    let deadL = document.querySelector('[data-timer-deadline]');
    console.log(deadL);
    const bannerTimer = document.querySelector('.banner__timer');

    const timerText = document.createElement('p');
    timerText.classList.add('.banner__timer-text');
    timerText.textContent = 'До конца акции:';

    const bannerTimerBlock = document.createElement('div');
    bannerTimerBlock.classList.add('.banner__timer-time');

    const timerFirst = document.createElement('p');
    timerFirst.classList.add('.banner__timer-day');
    timerFirst.textContent = 'дня';
    const timerFirstCount = document.createElement('span');
    timerFirstCount.classList.add('.banner__timer-big');
    timerFirstCount.textContent = '3';
    timerFirst.append(timerFirstCount);

    const timerSecond = document.createElement('p');
    timerSecond.classList.add('.banner__timer-hour');
    timerSecond.textContent = 'дня';
    const timerSecondCount = document.createElement('span');
    timerSecondCount.classList.add('.banner__timer-big');
    timerSecondCount.textContent = '8';
    timerSecond.append(timerSecondCount);

    const timerThird = document.createElement('p');
    timerThird.classList.add('.banner__timer-min');
    timerThird.textContent = 'дня';
    const timerThirdCount = document.createElement('span');
    timerThirdCount.classList.add('.banner__timer-big');
    timerThirdCount.textContent = '43';
    timerThird.append(timerThirdCount);

    bannerTimerBlock.append(timerFirst, timerSecond, timerThird);
    bannerTimer.append(timerText, bannerTimerBlock);

    console.log(deadL);
    timer();
};
scriptTimer();