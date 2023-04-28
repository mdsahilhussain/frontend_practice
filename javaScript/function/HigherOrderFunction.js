//! ***************************************************************************
//! ***************************************************************************
//! ******                                                               ******
//! ******              Higher Order Function in Depth                   ******
//! ******                                                               ******
//! ***************************************************************************
//! ***************************************************************************

{
  console.log("Higher Order Function");
  const radius = [3, 5, 8];

  const area = function (radius) {
    return Math.PI * radius * radius;
  };
  const cicumference = function (radius) {
    return 2 * Math.PI * radius;
  };
  const diameter = function (radius) {
    return 2 * radius;
  };

  //! It take another function as an argument "callback"
  const calculate = function (radius, callback) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(callback(radius[i]));
    }
    return output;
  };

  console.log("Calculate Area", calculate(radius, area));
  //? output--> [ 28.274333882308138, 78.53981633974483, 201.06192982974676 ] [ we pass this area() method to calculate() method as a rudle of "HOD function"]
  console.log("Calculate Cicumference", calculate(radius, cicumference));
  //? output--> [ 18.84955592153876, 31.41592653589793, 50.26548245743669 ] [ we pass this cicumference() method to calculate() method as a rudle of "HOD function"]
  console.log("Calculate Diameter", calculate(radius, diameter));
  //? output--> [ 6, 10, 16 ] [ we pass this diameter() method to calculate() method as a rudle of "HOD function"]
}

//* ===================================================================================
//* ===================================================================================
//* ======  Basically, a function which takes another function as an argument    ======
//* ======  or returns a function is known as a higher order function.           ======
//* ===================================================================================
//* ===================================================================================

//! ***************************************************************************
//! ******              Some Importent HOD Function                      ******
//! ***************************************************************************

//Todo  .map() method [Iterate on each element of the array and transfer the array according to user-specified conditions, and return a new array.]
//Todo  The .map() method does not change the original array.

{
  console.log(".map() method");
  let myArr = [1, 2, 3, 4, 5];
  //? item is each element of the array
  let newArr = myArr.map((item) => {
    //? transfer the array
    return item * item;
  });

  console.log("Orignal array", myArr);
  //? output--> [ 1, 2, 3, 4, 5 ]
  console.log("Map return array", newArr);
  //? output--> [ 1, 4, 9, 16, 25 ]
}

//Todo  .filter() method [is used to filter the context according to the conditions specified by the user, and to return a new array.]
//Todo  The .filter() method does not change the original array.

{
  console.log(".filter() method");
  let myArr = [1, 2, 3, 4, 5];
  //? item is each element of the array
  let filterArr = myArr.filter((item) => {
    //? transfer the array
    return item % 2 === 0;
  });

  console.log("Orignal array", myArr);
  //? output--> [ 1, 2, 3, 4, 5 ]
  console.log("Filter return array", filterArr);
  //? output--> [ 2, 4 ]
}

//Todo  The .reduce() method executes a reducer function for array element.
//Todo  The .reduce() method returns a single value: the function's accumulated result.
//Todo  The .reduce() method does not execute the function for empty array elements.
//Todo  The .reduce() method does not change the original array.

{
  console.log(".reduce() method");
  let myArr = [1, 2, 3, 4, 5];
  //? item is each element of the array
  //! reduce take four arguments 'accumulator', 'current value', 'current index', 'source array'.
  let sumArray = myArr.reduce((accumulator, currentValue) => {
    //? it's work similer to sum += arr[i]
    return accumulator + currentValue;
    //! Here we have initial value of the current value and now it's 0.
  }, 0);

  console.log("Orignal array", myArr);
  //? output--> [ 1, 2, 3, 4, 5 ]
  console.log("Reduce return array", sumArray);
  //? output--> 15
}
