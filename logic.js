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
    
    let grade = ""
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else if (average >= 60) grade = "D";
    else grade = "F";
}


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];
