//! ***************************************************************************
//! ***************************************************************************
//! ******                                                               ******
//! ******    Hoisting, Lexical scope and scope chain and var in depth   ******
//! ******                                                               ******
//! ***************************************************************************
//! ***************************************************************************

//Todo =============================================================
// eslint-disable-next-line no-unused-vars
var num = 10;
function funtionA() {  
  var num = 20;
  console.log("line number 15", num);
  //! output--> 20 [ because var is funtion scop veriable]
}
funtionA();

//Todo =============================================================
// eslint-disable-next-line no-use-before-define
console.log("line number 21", varNameA);
//! output--> undefined [ due to hosting varible located memory at the top of the scop with by defult undefined value ]
var varNameA = 10;
function funtionD() {
  console.log("line number 24", varNameA);
  //! output--> 10 [due to Lexical scope ]
}
console.log("line number 26", varNameA);
//? output--> 10
function funtionB() {
  // eslint-disable-next-line no-use-before-define
  console.log("line number 29", varNameA);
  //? output--> undefined [ because var is funtion scop veriable]
  // eslint-disable-next-line no-use-before-define
  console.log("line number 31", varNameA);
  //? output--> undefined [ because var is funtion scop veriable]
  var varNameA = 20;
  function funtionC() {
    console.log("line number 34", varNameA);
    //! output--> 20 [due to Closer the ability for a Child function scope to access variables from the parent scope.]
  }
  funtionC();
  funtionD();
  console.log("line number 38", varNameA);
  //? output--> 20
}
funtionB();

//Todo =============================================================
// eslint-disable-next-line no-use-before-define
console.log("line number 44 : ", varNameB);
//? output--> undefined [ due to hosting varible located memory at the top of the scop with by defult undefined value ]
var varNameB;
console.log("line number 46 : ", varNameB);
//? output--> undefined [ due to hosting varible located memory at the top of the scop with by defult undefined value ]
varNameB = "Captain America";
console.log("line number 48 : ", varNameB);
//? output--> Captain America [ we initialize value to variable by Captain America ]
funtionD();
//! output--> function invoked [ due to hosting funtion move & defined top of the scop ]

function funtionE() {
  console.log("line number 52");
  //? output--> line number 38
}

funtionE();

var FunctionF = function () {
  //! [  we treated function as a variable. ]
  console.log("line number 59");
  //? output--> line number 45
};

FunctionF();

//Todo =============================================================
var number = 10;
console.log("line number 66", number);
//? output--> 10
function funtionG() {
  // eslint-disable-next-line no-use-before-define
  console.log("line number 69", number);
  //? output--> undefined
  var number = 20;
  number++;
  //? increase "number" by 1.
  console.log("line number 72", number);
  //? output--> 21
  if (number) {
    // eslint-disable-next-line no-redeclare
    var number = 30;
    number++;
    //?increase "number" by 1.
    console.log("line number 77", number);
    //? output--> 31
  }
  console.log("line number 79", number);
  //? output--> 31
}
funtionG();
console.log("line number 82", number);
//? output--> 10
