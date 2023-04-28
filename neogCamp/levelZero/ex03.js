//! welcome your user
//! challenge
//Todo A program to take a string. And add "Welcome" to it. Then console it.

//! understand
//Todo manipulating a string,
//Todo using + to concatenate

const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name? ");
let welcomeMassege = "Welcom" + name;
console.log(welcomeMassege);
