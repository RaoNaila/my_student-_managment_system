#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non_empty value";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enroll",
        choices: ["MS.office", "HTML", "CSS", "Javascript", "Typescript"]
    }
]);
const courseFee = {
    "MS.office": 3000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 7000,
    "CSS": 4000,
};
console.log(`\n courseFee :${courseFee[answer.courses]}\n`);
console.log(`\nBalance: ${myBalance}/n`);
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "transfer mony",
        validate: function (value) {
            if (value.trim !== "") {
                return true;
            }
            return "please enter a non empty value";
        }
    }
]);
console.log(`\n you select paymentmethod${paymentMethod.payment}`);
const fee = courseFee[answer.courses];
const paidamount = parseFloat(paymentMethod.amount);
if (fee === paidamount) {
    console.log(`\nyou are successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you liketo do next",
            choices: ["view status", "Exist"]
        }
    ]);
    if (ans.select === "view status") {
        console.log(`\n*************status***************`);
        console.log(`student:${randomNumber}`);
        console.log(`student name:${answer.student}`);
        console.log(`course :${answer.courses}`);
        console.log(`course fee paid:${paidamount}`);
        console.log(`Balance:${myBalance += paidamount}`);
    }
    else {
        console.log(`Exist`);
    }
}
else {
    console.log("invalid amount for course.");
}
;
