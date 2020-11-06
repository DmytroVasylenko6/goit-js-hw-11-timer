
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.timerEl = document.querySelector(`${selector}`)
        this.refs = {
            days: this.timerEl.querySelector('[data-value="days"]'),
            hours: this.timerEl.querySelector('[data-value="hours"]'),
            mins: this.timerEl.querySelector('[data-value="mins"]'),
            secs: this.timerEl.querySelector('[data-value="secs"]'),
        };
        this.renderCountdownTime()
    };

    renderCountdownTime() {

        setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.updateClockFace(time);
        }, 1000);
    };

    pad(value) {
        return String(value).padStart(2, '0');
    };

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))
        return { days, hours, mins, secs }
    };

    updateClockFace({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    };

}

     
const time = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 9, 2020'),
});