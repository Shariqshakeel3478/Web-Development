let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let sayHello;

startBtn.addEventListener('click', function () {
    sayHello = setInterval(function () {
        console.log("Hi Shariq");
    }, 1000)

})

stopBtn.addEventListener('click', function () {
    clearInterval(sayHello)
})