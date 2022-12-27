//! ***************************************************************************
//! ***************************************************************************
//! ******                                                               ******
//! ******                Function Programing in Depth                   ******
//! ******                                                               ******
//! ***************************************************************************
//! ***************************************************************************

//* is the square of the number is even
{
  //Todo Imperative way [With imperative programming, you tell the compiler what you want to happen, step by step.]
  const x = 4;
  const xSquared = x * x;
  let isEven;
  if (xSquared % 2 === 0) {
    isEven = true;
  } else {
    isEven = false;
  }
  console.log("Imperative way: ", isEven);
}

{
  //Todo  Declarative way [ With declarative programming, on the other hand, you write code that describes what you want,
  //Todo  but not necessarily how to get it (declare your desired results, but not the step-by-step) ]
  const isSquared = (x) => ((x * x) % 2 === 0 ? true : false);
  console.log("Declarative way: ", isSquared(4));
}

{
  //Todo Impure function [ Its result depends upon some external factors impure function is a function that contains one or more side effects. ]
  const num = 5; //! external factor
  function addNum(num2) {
    console.log("Impure function:", num + num2);
  }
  addNum(5);
}

{
  //?Todo  Pure function [ Its result does not depend on an external factor pure function is a function with no side effects. ]
  //! no external factor
  function addNum(num, num2) {
    return num + num2;
  }
  console.log("Pure function:", addNum(10, 5));
}

//! Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.
{
  //?Todo  Mutable  [ A mutable object is an object whose state can be modified after it is created. ]
  const person = {
    name: "Sahil",
    age: "23",
  };
  console.log("Mutable person:", person);
  //? output--> { name: 'sahil', age: '23' }
  //! Assing Reference Types
  const personTwo = person;
  personTwo.name = "Bittu";
  console.log("Mutable person output after change personTwo name", person);
  //? output--> { name: 'Bittu', age: '23' } [ we change target object.name value due to reference type it also change owner object.name value ]
  console.log("Mutable personTwo:", personTwo);
  //? output--> { name: 'Bittu', age: '23' }
}

//!  To resolve the problem and make the code Immutable, we have.
//!  1. Deep copy & shallow copy.
//!  2. Object.assign() method.
//!  3. Spread operator (...).

{
  //?Todo  Immutable  [ Immutables are the objects whose state cannot be changed once the object is created. ]
  const person = {
    name: "Sahil",
    age: "23",
  };
  console.log("Immutable person:", person);
  //? output--> { name: 'sahil', age: '23' }
  //! Assing Object.assign() method.
  const personTwo = Object.assign({}, person);
  personTwo.name = "Bittu";
  console.log("Immutable person output after change personTwo name", person);
  //? output--> { name: 'Sahil', age: '23' } [ Besause Object.assign method return new copy of target object into other location. ]
  console.log("Immutable personTwo:", personTwo);
  //? output--> { name: 'Bittu', age: '23' }
}



//* ===================================================================================
//* ===================================================================================
//* ======  So Funtion Programing most have "Declarative"," Pure", "Immutable"   ======
//* ===================================================================================
//* ===================================================================================