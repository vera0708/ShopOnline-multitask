class TimerShow {
    constructor(selector, options) {
        let defaultOptions = {
            childClass: "timer-element",
        };
        this.options = Object.assign(defaultOptions, options);
        this.deadL = document.querySelector('[data-timer-deadline]');

    }
}

new TimerShow('[data-timer-deadline]', {

})