const students = [{
        name: "Ali",
        score: 85
    },
    {
        name: "Sara",
        score: 92
    },
    {
        name: "Ahmed",
        score: 78
    },
    {
        name: "Fatima",
        score: 90
    },
];

const topperStudents = students.filter((student) => {

    return student.score > 80
})

// console.log(topperStudents);

const topperNames = students.filter((student) => student.score > 80).map((student) => student.name)

console.log(topperNames)



const studentAverage = students.reduce((a, b) => {

    return a + b.score
}, 0) // 0 is the starting point of a(accumulator)

// console.log(studentAverage / students.length)