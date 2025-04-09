const newObject = {
    name: "shariq",
    university: "ssuet"
}

// extracting any entity

// const {name} = newObject;  // calling using symbol
// console.log(name)


const {
    name: fullName // name changed for the key
} = newObject;
console.log(fullName)