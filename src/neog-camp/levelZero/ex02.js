//! read the name of your user

//! challenge
//Todo  A program to read input from your user. Output this name. Use readlineSync() for this.

//Todo  add readlineSync() as a dependency
//Todo  import it in your index.js
//Todo  know how to read docs and use it. In programming, it is extremely important to read docs.
//Todo  use a variable to store this name.
//Todo  output this name.

const readlineSync = require('readline-sync');

let name = readlineSync.question("What's your name? ");
console.log(`Hello, ${name}!`);

