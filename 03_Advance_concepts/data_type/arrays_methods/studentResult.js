let students = [
    { name: "Aman", marks: 80 },
    { name: "Rohit", marks: 40 }
];

let updatedResults = students.map((stu, index, arr) => {
    return {
        ...stu,
        results: stu.marks <= 40 ? "fail":"pass"
    }
})

console.log(updatedResults)
console.log(students)