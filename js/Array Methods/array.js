// array syntax

const myArr = [1, 2, 3, 4, 5];
const myArr2 = new Array(4, 5, 6, 7, 8);

// console.log(myArr)
// console.log(myArr2)


// array methods

myArr.push(9);
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.shift()
// console.log(myArr)

myArr.unshift(3);
// console.log(myArr);


// join converts array to string
const newArr = myArr.join()
// console.log(newArr)

// slice and splice 

const arrN1 = myArr.slice(1, 3) // index,length from start

console.log(`original array : ${myArr}`)
// console.log(arrN1) // original array remains


const arrN2 = myArr.splice(1, 3); // starting point, counts from the starting point
console.log(`original array : ${myArr}`)
// console.log(arrN2) // original array changed


const myNewarr = [1, 2, 3, [4, 5], 7, [8, 9],
    [10, [11]]
];
// console.log(myNewarr.flat(Infinity)) // makes 2d or 3d array a 1d array


// Array Combining Methods

// const combinedArr = myArr.concat(myArr2); // using method
const combinedArr2 = [...myArr, ...myArr2] // spread method
// console.log(combinedArr2);



// console.log(Array.isArray("Shariq")) // checks if it is an array
// console.log(Array.from("Shariq")) // converts into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) // make a new of multiple elements given 