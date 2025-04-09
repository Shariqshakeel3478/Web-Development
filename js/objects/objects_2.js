// declaration using singleton

const myObject = new Object();
myObject.name = "Shariq";
myObject.university = "ssuet";

// console.log(myObject)


// objects within objects

const newObject = {
    fullName: {
        firstName: "Shariq",
        lastName: "Shakeel"
    },
    qualifications: {
        college: {
            name: "The Caspian College",
            passingYear: 2023
        },
        university: {
            name: "ssuet",
            graduation: 2027
        }
    }

}

// console.log(newObject.qualifications.university)


// combining multiple objects

// const thirdObject = Object.assign(myObject, newObject)  // not used that much

const thirdObject = {
    ...myObject,
    ...newObject
}
// console.log(thirdObject)
// console.log(thirdObject)



// getting keys , values and entries from object

// console.log(Object.keys(newObject)); // returns array
// console.log(Object.values(newObject))
// console.log(Object.entries(newObject)); // returns separate array for each key value pair

// // check if any entry is available in an object

// console.log(newObject.hasOwnProperty('fullName')); // returns a boolean