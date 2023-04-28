//! ***************************************************************************
//! ***************************************************************************
//! ******                                                               ******
//! ******                   Generate Function                           ******
//! ******                                                               ******
//! ***************************************************************************
//! ***************************************************************************

// Generate Function generates three
// different numbers in three calls
function* fun() {
  yield 10;
  yield 20;
  yield 30;
}

// Calling the Generate Function
var gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
