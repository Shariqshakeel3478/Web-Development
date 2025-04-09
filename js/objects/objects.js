// singleton
// Object.create  // constructor method

// object literals
// const jsUser = {

//     name: "Shariq",
//     age: 20,
//     field: "Computer Science",
//     university: "SSUET"
// }

// element accesing methods

// console.log(jsUser.name); // not a right method because key is by default in string 
// console.log(jsUser["name"])


// using "Symbol" data type in object

// let mySym = Symbol("symbol"); // declared outside of the object

// const newObject = {
//     name: "Shariq",
//     age: 20,
//     [mySym]: "symbol inside object" // overridden the symbol value here
// }
// console.log(newObject[mySym]);



// overriding object values

// const thirdObject = {
//     name: "Shariq",
//     email: "0971shariq@gmail.com"
// }

// thirdObject.name = "suleman";
// thirdObject.email = "0972suleman@gmail.com"

// console.log(thirdObject)



// Object freezing method  => cannot change any value of object after using it


const fourthObject = {
    name: "Shariq",
    email: "0971shariq@gmail.com"
}

// Object.freeze(fourthObject);
// fourthObject.name = "Suleman";
// fourthObject.email = "0972shariq@gmail.com";

// console.log(fourthObject) // no changes happened




// function inside objects

fourthObject.greeting = function () { // function added inside the object with key : greeting
    console.log('Hello')
}

// console.log(fourthObject.greeting); // only provides function reference
// console.log(fourthObject.greeting()); // function will be executed

// fourthObject.greetingTwo = function () {
//     return `Hi, I am ${this.name}` // "this refers to its own object"
// }

// console.log(fourthObject.greetingTwo())