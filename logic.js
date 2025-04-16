function generateReports(students) {
    const report = [];

    for(let i = 0; i<students.length; i++){
        const student = students[i];
        const scores = student.scores;
    
    let total = 0;
    for(let j = 0; j<students.length; j++){
        total += scores[j]
    }
    const average = (total/score.length)
    
    
}


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];
