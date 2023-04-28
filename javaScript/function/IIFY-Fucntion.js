//! ***************************************************************************
//! ***************************************************************************
//! ******                                                               ******
//! ******        Immediately Invoked Function Expression (IIFE)         ******
//! ******                                                               ******
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

//! NOw how to convert noromal function into IIFE
(function (num, num1) {
  console.log("IIFE funcion", num + num1);
  //?output-->  IIFE funcion 10
})(5, 5);

((num, num1) => {
  console.log("IIFE Arrow funcion", num + num1);
  //?output--> IIFE Arrow funcion 12
})(6, 6);

//Todo  An IIFE is a javaScript function that run as soon as it defined.
//Todo  It design pattern is also know as a self executing anonymous function and contaion two parts.
//Todo  1. The first is anonymous function with lexical scope enclosed with in group operator. This prevets accessing varibales
//Todo  with in the IIFE idiom as well as polluting the globel.
//Todo  2. and second part create the immediately invoked function expection () thorough which the javaScript engine will directly interpret the function.

//! Use case of IIFE

//?  IIFE is used to create private and public variables and method.

//?  It used to execute asyn and await function.
(async () => {
  // …
})();
