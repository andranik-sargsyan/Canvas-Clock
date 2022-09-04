let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let radius = 230;

function draw() {
    clear();
    drawTemplate();
    drawCenter();

    let date = new Date();
    drawSecondsArrow(date.getSeconds());
    drawMinutesArrow(date.getMinutes());
    drawHoursArrow(date.getHours());
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawTemplate() {
    ctx.drawImage(document.querySelector("img"), 0, 0);
}

function drawCenter() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function drawSecondsArrow(seconds) {
    ctx.beginPath();

    let angle = Math.PI / 2 - seconds * Math.PI / 30;

    let a = radius * Math.cos(angle);
    let b = radius * Math.sin(angle);

    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + a, canvas.height / 2 - b);

    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawMinutesArrow(minutes) {
    ctx.beginPath();

    let angle = Math.PI / 2 - minutes * Math.PI / 30;

    let a = 0.8 * radius * Math.cos(angle);
    let b = 0.8 * radius * Math.sin(angle);

    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + a, canvas.height / 2 - b);

    ctx.lineWidth = 5;
    ctx.stroke();
}

function drawHoursArrow(hours) {
    ctx.beginPath();

    let angle = Math.PI / 2 - hours * Math.PI / 6;

    let a = 0.6 * radius * Math.cos(angle);
    let b = 0.6 * radius * Math.sin(angle);

    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + a, canvas.height / 2 - b);

    ctx.lineWidth = 7;
    ctx.stroke();
}

setInterval(function () {
    draw();
}, 1000);
