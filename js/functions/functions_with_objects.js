// Functions with "Rest" operator

//1. using single argument

// function calcTotal(...a) {
//     return a
// }

// console.log(calcTotal(200, 300, 400)) // creates a new array


//2 using multiple arguments 

// function calcTotal(a, b, ...c) {
//     let first = `a : ${a}`;
//     let sec = `b : ${b}`;
//     let third = `c : ${c}`;

//     return [first, sec, third];
// }

// console.log(calcTotal(200, 300, 400, 500, 600))


// function with object


// let user = {
//     name: "Suleman",
//     age: 18
// }

// function showDetails(a) {
//     return `My name is ${a.name} and my age is ${a.age}`
// }

// console.log(showDetails(user))


//passing object inside function argument directly

// function showDetails(a) {
//     return `Name : ${a.name} and age: ${ a.age}`

// }

// console.log(showDetails({
//     name: "Shariq",
//     age: 20
// }))


// function with array


// let myArray = [100, 200, 300]

// function getArrayVal(arr) {
//     return arr[2]
// }

// console.log(getArrayVal(myArray))