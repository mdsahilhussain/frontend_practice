//! ***************************************************************************
//! ***************************************************************************
//! ******                                                               ******
//! ******                   let and const in depth                      ******
//! ******                                                               ******
//! ***************************************************************************
//! ***************************************************************************

//Todo =============================================================
console.log("Hello");
//? output--> Hello
//todo console.log("varName on line number 5", varName);
//! output--> error [ Cannot access 'varName' before initialization Due to TDZ Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed]
let varName;
console.log("varName on line number 5", varName);
//? output undefined
varName = 10;
varName = 20;
console.log("varName on line number 8", varName);
//! output 20 [ let can be reassign with a new value. ]

//Todo =============================================================
let fruitnameA = "apple";
console.log(fruitnameA);
//? output apple
{
  let fruitnameA;
  console.log(fruitnameA);
  //! output undefined [because let is block scope]
  fruitnameA = "orange";
  console.log(fruitnameA);
  //? output orange [ let can be reassign with a new value. ]
}
console.log(fruitnameA);

//Todo =============================================================
var fruitnameB = "apple";
console.log(fruitnameB);
{
  //Todo console.log(fruitnameB);
  //? output--> error [  Due to TDZ ]
  let fruitnameB = "orange";
  console.log(fruitnameB);
  //! output orange [here we do Legal variable shadowing first varibale declared with var and then varibale redeclared with let]
}
console.log(fruitnameB);

//Todo =============================================================
//* let fruitnameC = "apple";
//* console.log(fruitnameC);
//* console.log(fruits)
//* {
//!  var fruitnameC = "orange"; [here we do Illegal variable shadowing ]
//*   console.log(fruitnameC);
//* }
//* console.log(fruitnameC);

//* =======================================================
//* ==========        Variable shadowing         ==========
//* =======================================================
//* =======  outer  ==  inner  ==  varibale shadowing =====
//* =======================================================
//* =======  var    ==  var    ==  Legal shadowing    =====
//* =======  let    ==  let    ==  Legal shadowing    =====
//* =======  const  ==  const  ==  Legal shadowing    =====
//* =======  var    ==  const  ==  Legal shadowing    =====
//* =======  var    ==  let    ==  Legal shadowing    =====
//* =======  let    ==  var    ==  Illegal shadowing  =====
//* =======  const  ==  var    ==  Illegal shadowing  =====
//* =======================================================
//* =======================================================

//* ===================================================================================
//* ============================          Revise            ===========================
//* ===================================================================================
//* =======  Keyword  ==  Scope            ==  Reassing  ==  Redeclar  ==  TDZ    =====
//* ===================================================================================
//* =======  var      ==  Fuction, Global  ==  True      ==  True      ==  False  =====
//* =======  let      ==  Fuction, Block   ==  True      ==  False     ==  True   =====
//* =======  const    ==  Fuction, Block   ==  False     ==  False     ==  True  =====
//* ===================================================================================
//* ===================================================================================
