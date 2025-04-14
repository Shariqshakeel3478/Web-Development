// setTimeout  => do a task after a period of time
// method 1

// setTimeout(function () {
//     console.log('hello')
// }, 2000)


//method 2 => store it in a variable

// const sayHello = function () {
//     console.log('say Hello');
// }

// setTimeout(sayHello, 2000)


// stop its execution
// clearTimeout  => takes a reference for which setimeout to be stoped;

// document.getElementById('stop').addEventListener('click', function () {
//     clearTimeout(sayHello);
//     console.log('stoped')
// })




// setInterval => har interval of time ke baad ye kam karta hai;

// setInterval(function () {
//     console.log('hello')
// }, 2000)


// setInterval using variable

// let sayHello = function () {
//     console.log('hello');
// }

// setInterval(sayHello, 2000)



// setInterval using variable and third parameter

// let sayHello = function (e) {
//     console.log("hi", e)
// }

// setInterval(sayHello, 2000, "Shariq");



// clear Interval => set Interval ko terminate karta hai
// note: clear Interval lagane ke liye pehle setInterval ko variable me store karana hai 

// let sayHello = function (e) {
//     console.log('hi', e)
// }

// let newVariable = setInterval(sayHello, 2000, 'Shariq'); // stored in a variable

// clearInterval(newVariable)