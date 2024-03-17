import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter frist number", type: "number", name: "fristnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    { message: "select operator", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"], }
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(answer.fristnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.fristnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.fristnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.fristnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
