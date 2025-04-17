//Time complexity: O(n) * o(n) = o(n^2)
//Q1
// function generateReports(students) {
//     const reports = [];

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         const scores = student.scores;

//         let total = 0;
//         for (let j = 0; j < scores.length; j++) {
//             total += scores[j];
//         }
//         const average = total / scores.length;

//         let grade = "";
//         if (average >= 90) grade = "A";
//         else if (average >= 80) grade = "B";
//         else if (average >= 70) grade = "C";
//         else if (average >= 60) grade = "D";
//         else grade = "F";
        
//         reports.push({
//             name: student.name,
//             average: average,
//             grade: grade
//         });
//     }

//     return reports;
// }

// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [70, 68, 72] },
//     { name: "Charlie", scores: [100, 100, 100] }
// ];

// console.log(generateReports(students));
//Time complexity: O(n)
//Q2
//created a class called BankAccount
// class BankAccount {
//     constructor(ownerName, initialBalance) {
//         this.ownerName = ownerName;
//         this.balance = initialBalance;
//         this.history = [];
//         this.history.push(`Account created for ${ownerName} with initial balance: ${initialBalance}`);
//     }
//     // created a method to deposit money
//     deposite(amount) {
//         if (amount <=0) {
//             console.log("Deposit amount must be greater than zero.");
//             return;
//         }
//         this.balance += amount;
//         this.history.push(`Deposited: ${amount}`);
//     }
//     // created a method to withdraw money
//     withdraw(amount) {
//         if (amount <=0) {
//             console.log("Withdrawal amount must be greater than zero.");
//             return;
//         }
//         if (amount > this.balance) {
//             console.log("Insufficient funds.");
//             return;
//         }
//         this.balance -= amount;
//         this.history.push(`Withdrawn: ${amount}`);
//     }
//     // created amethod to transfer money
//     transferto(anotherAccount, amount) {
//         if (amount <=0) {
//             console.log("Transfer amount must be greater than zero.");
//             return;
//         }
//         if (amount > this.balance) {
//             console.log("Insufficient funds.");
//             return;
//         }
//         this.balance -= amount;
//         anotherAccount.balance += amount;
//         this.history.push(`Transferred: ${amount} to ${anotherAccount.ownerName}`);
//         anotherAccount.history.push
//     }
//     getSummary() {
//         return `Account owner: ${this.ownerName}, Balance: ${this.balance}`;
//     }
//     printHistory() {
//         console.log(`Transaction history for ${this.ownerName}:`);
//         for (let i = 0; i < this.history.length; i++) {
//             console.log(this.history[i]);
//         }
//     }
// }

// const acc1 = new BankAccount("Samer", 5000);
// const acc2 = new BankAccount("Ahamad", 3000);

// acc1.deposite(2000);
// acc1.withdraw(1000);

// acc1.transferto(acc2, 1500);

// acc1.printHistory();
// acc2.printHistory();

// console.log(acc1.getSummary());
// console.log(acc2.getSummary());
//Q3

// Get the elements from the HTML
const input = document.getElementById("text");
const button = document.getElementById("btn");
const list = document.getElementById("lst");

// Add task function
button.addEventListener('click', () => {
const taskText = input.value.trim(); // Get and trim input
if (taskText === "") return; // Don't add empty tasks

