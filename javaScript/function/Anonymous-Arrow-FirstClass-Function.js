//! ***************************************************************************
//! ***************************************************************************
//! ******              Anonymous Function,                              ******
//! ******              Arrow Function,                                  ******
//! ******              First Class Function                             ******
//! ***************************************************************************
//! ***************************************************************************

{
  //! Normal function
  function sum(num, num1) {
    return num + num1;
  }
  console.log("Normal funcion", sum(4, 4));
  //?output-->  normal funcion 8
}

//! Now how to convert Noromal function into [Anonymous function]
{
  //* console.log("Anonymous funcion", sum(5, 5)); output-->  ReferenceError: Cannot access 'sum' before initialization [ not hoisted ]
  let sum = function (num, num1) {
    return num + num1;
  };
  console.log("Anonymous funcion", sum(5, 5));
  //?output-->  normal funcion 8
}

//Todo Anonymous function: A function wihtout a name but with function keyword and parnthess().
//Todo An Anonymous function is not accessible after its decoration. Therefore, we need to assign it to a variable.

//Todo ======================================================================================
//! After "ES6" Anonymous function change to [Arrow fucntion]
//Todo Array Function: allow a short syntex for writing anonymous function. You don't need the fucntion keyword, the return keyword and the curly brackets.
{
  //*  console.log("Arrow funcion", sum(5, 5)); output-->  ReferenceError: Cannot access 'sum' before initialization [ not hoisted ]
  const sum = (num, num1) => {
    return num + num1;
  };
  console.log("Arrow funcion", sum(5, 5));
  //?output-->  normal funcion 8
}

//! Important for interview
//? Arrow fucntion do not have own "this". They are not well suited for defining "object methods."
//? Arrow function aka anonymous function are not hoisted. They must be defined before they are used.
//? Using "const" is a sefer than using "var", because a function experrsion is always constant value.

//Todo ======================================================================================
//! 1. Ability to treate function as value
{
  let sum = function (num, num1) {
    return num + num1;
  };
  console.log("Ability to treate function as value:", sum(6, 6));
  //?output-->  Ability to treate function as value: 8
}

//!  2. Ability to pass a functions as arguments.
{
  function studentName(name) {
    return name;
  }
  //? passFuntion ==> student Name.
  function teacherSay(name, passFuntion) {
    console.log("=> Ability to pass a functions as arguments:");
    console.log("Stand up", passFuntion(name));
  }
  teacherSay("sahil", studentName);
}

//!  3. Ability to return a function from another function.
{
  function teacherSay(teacherName) {
    return function studentName(studentName) {
      return `${teacherName} sir, Say ${studentName} stand up`;
    };
  }
  console.log("=> Ability to return a function from another function:");
  console.log(
    "1st way to call this funtion",
    teacherSay("Sahil Hussain")("Bittu")
  );
  let call = teacherSay("Sahil hussain");
  console.log("2nd way to call this function", call("Bittu"));
}

//! More example of First Class function
//Todo  So, A programing fuction is said to have first-class function when function Abiltiy to 
//Todo  1. treat function as value.
//Todo  2. to pass a function as arguments.
//Todo  3. to return a function form another funtion.
{
  const Arithmetics = {
    add: (a, b) => {
      return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
      return `${a} - ${b} = ${a - b}`;
    },
    multiply: (a, b) => {
      return `${a} * ${b} = ${a * b}`;
    },
    division: (a, b) => {
      if (b !== 0) return `${a} / ${b} = ${a / b}`;
      return `Cannot Divide by Zero!!!`;
    },
  };

  console.log("Add: ", Arithmetics.add(100, 100));
  console.log("Subtract: ", Arithmetics.subtract(100, 7));
  console.log("Multiply: ", Arithmetics.multiply(5, 5));
  console.log("Division: ", Arithmetics.division(100, 5));
}
