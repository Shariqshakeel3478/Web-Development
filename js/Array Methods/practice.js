//1. double the array using map

// let myArr = [1, 2, 3, 4, 5]; // given
// let answer = myArr.map((item) => {
//     return item * 2
// })

// console.log(answer)


//2 find even numbers using filter 

// let myArr = [5, 8, 11, 14, 17];
// let answer = myArr.filter((item) => {

//     let evenAns = item % 2 === 0;
//     return evenAns
// })

// console.log(answer);



//3. sum all numbers using reduce
// let myArr = [5, 8, 11, 14, 17];
// let newArr = myArr.reduce((a, b) => {
//     return a + b
// })
// console.log(newArr)



//4 convert string into array
// let name = 'Shariq';
// let newArr = Array.from(name)
// console.log(newArr)


//5  get names of users using filter and map

// const users = [{
//         name: 'Ali',
//         age: 17
//     },
//     {
//         name: 'Sara',
//         age: 22
//     },
//     {
//         name: 'John',
//         age: 19
//     }
// ];

// let userNames = users.map((item) => {
//     if (item.age > 18) {
//         return item
//     }
// }).filter((a) => {
//     return a.name
// })

// console.log(userNames)