// Clock widget

var hoursEl, minutesEl, secondsEl;
var hours, minutes, seconds;
var today;

var fieldData;

window.addEventListener('onWidgetLoad', function (obj) {
    fieldData = obj.detail.fieldData;

    clock = document.querySelector('#timer');
    hoursEl = document.querySelector('#hours_val');
    minutesEl = document.querySelector('#minutes_val');
    secondsEl = document.querySelector('#seconds_val');

    start();
});

function start() {
    // console.log("start()");
    today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    if (fieldData["displayLeadingZeroHours"]) {
        hours = checkTime(hours);
    }
    if (fieldData["displayLeadingZeroMinutes"]) {
        minutes = checkTime(minutes);
    }
    if (fieldData["displayLeadingZeroSeconds"]) {
        seconds = checkTime(seconds);
    }
    // console.log("h:", hours, " | m:", minutes, " | s:", seconds, );
    update();

    setTimeout(start, 500);
}

function checkTime(t) {
    if (t < 10) {
        t = "0" + t;
    }
    return t;
}

function update() {
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}