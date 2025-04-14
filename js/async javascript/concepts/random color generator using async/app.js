let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let colorChange;


startBtn.addEventListener('click', function () {
    colorChange = setInterval(function () {
        let randNumber = Math.floor(Math.random() * 16777215);
        let hexNumber = randNumber.toString(16);
        // console.log(hexNumber)

        document.body.style.background = `#${hexNumber}`

    }, 1000)
});


stopBtn.addEventListener('click', function () {
    clearInterval(colorChange)
})