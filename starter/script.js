'use strict';

// let hasDriversLicense = false;
// const passTest = true;
 
// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('i can drive very well');

// const interface = 'Audio'

// function logger(){
//   console.log('my name is jonas');
// }

// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
// const juice = `juice with ${apples} apples and ${oranges} oranges.`;
// return juice;
// }

// const applejuice = fruitProcessor(5,0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4) ;
// console.log(appleOrangeJuice);


//function declaration
// function calcAge1(birthYear){
//   return 2037-birthYear;
// }

// const age1 = calcAge1(1991)
// console.log(age1);


// //function expression
// const calcAge2 = function(birthYear){
// return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);


//arrow function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years `
// }

// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function CutFruitPieces(fruit){
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges){const applePieces = CutFruitPieces(apples);
//   const orangePieces = CutFruitPieces(oranges);
// const juice = `juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
// return juice;
// }
// console.log (fruitProcessor(2, 3));


const calcAge = function(birthYeah){
  return 2037 - birthyeah;
}
const yearsUntilRetirement = function(birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years `
}
yearsUntilRetirement(1991, 'jonas')