const clock = function () {
    let time = new Date();

    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    if (hrs < 10) {
        hrs = `0` + hrs;
    }

    if (mins < 10) {
        mins = `0` + mins;
    }

    if (secs < 10) {
        secs = `0` + secs;
    }

    document.getElementById(`hour`).innerHTML = hrs;
    document.getElementById(`minute`).innerHTML = `: ` + mins;
    document.getElementById(`second`).innerHTML = `: ` + secs;
};

setInterval(clock, 1000);
