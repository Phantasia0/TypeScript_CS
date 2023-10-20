"use strict";
const userName = "Max";
let age = 30;
age = 20;
const add = (a, b = 1) => a + b;
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
}
printOutput(add(5));
const hobbies = ["Sports", "Cooking"];
const acitveHobbies = ["Hiking"];
acitveHobbies.push(...hobbies);
console.log(acitveHobbies);
const person = {
    firstName: "Max",
    firstAge: 11,
};
const copiedPerson = Object.assign({}, person);
const addMany = (...rest) => {
    return rest.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addMany(5, 10, 2, 3.6, 100);
console.log(addedNumbers);
const [first, second, ...remaining] = hobbies;
console.log(first, second, ...remaining);
const { firstName: personName, firstAge: personAge } = person;
console.log(personName, personAge);
//# sourceMappingURL=app.js.map