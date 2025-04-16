function generateReports(students) {
    const reports = [];

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const scores = student.scores;

        let total = 0;
        for (let j = 0; j < scores.length; j++) {
            total += scores[j];
        }
        const average = total / scores.length;

        let grade = "";
        if (average >= 90) grade = "A";
        else if (average >= 80) grade = "B";
        else if (average >= 70) grade = "C";
        else if (average >= 60) grade = "D";
        else grade = "F";

        reports.push({
            name: student.name,
            average: average,
            grade: grade
        });
    }

    return reports;
}

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];
console.log(generateReports(students));
// Output:
// [
//   { name: 'Alice', average: 89, grade: 'B' },
//   { name: 'Bob', average: 70, grade: 'C' },
//   { name: 'Charlie', average: 100, grade: 'A' }
// ]