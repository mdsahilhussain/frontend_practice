//! print right/wrong if greater than 25
//! challenge
//Todo  Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

//! understand
//Todo  branching of code, i.e. only one branch runs based on a CONDITION

const ageCheker = (age) => {
  if (age > 25) {
    console.log("right");
  } else {
    console.log("wrong");
  }
};

ageCheker(28);
