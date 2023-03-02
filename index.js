const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const counter = document.querySelector('.count')

const start = document.querySelectorAll('button')[0]
const stp = document.querySelectorAll('button')[1]
const reset = document.querySelectorAll('button')[2]

let count = 0;
let hr = 0;
let min = 0;
let sec = 0;

let interval;

function timer() {
    if (count === 99) {
        count = 0;
        counter.textContent = (count < 10) ? '0' + count : count;
        if (sec === 59) {
            sec = 0;
            second.textContent = (sec < 10) ? '0' + sec : sec;
            if (min === 59) {
                min = 0;
                minute.textContent = (min < 10) ? '0' + min : min;
                if (hr === 23) {
                    hr = 0;
                    hour.textContent = (hr < 10) ? '0' + hr : hr;
                }
                else {
                    hr += 1;
                    hour.textContent = (hr < 10) ? '0' + hr : hr;
                }
            }
            else {
                min += 1;
                minute.textContent = (min < 10) ? '0' + min : min;
            }
        }
        else {
            sec += 1;
            second.textContent = (sec < 10) ? '0' + sec : sec;
        }
    }
    else {
        count += 1;
        counter.textContent = (count < 10) ? '0' + count : count;
    }
}

start.addEventListener('click', () => {
    interval = setInterval(timer, 10);
})

stp.addEventListener('click', () => {
    clearInterval(interval);
})

reset.addEventListener('click', () => {
    clearInterval(interval);
    count = hr = sec = min = 0;
    hour.textContent = '00';
    minute.textContent = '00';
    second.textContent = '00';
    counter.textContent = '00';
})