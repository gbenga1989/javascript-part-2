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


// const calcAge = function(birthYeah){
//   return 2037 - birthyeah;
// }
// const yearsUntilRetirement = function(birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
  
// const calcAge = function(birthYeah){
//   return 2037 - birthYeah
// }


// const yearsUntilRetirement = function(birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

// //   return `${firstName} retires in ${retirement} years `
// // }


// console.log(yearsUntilRetirement(1991, 'jonas');

/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.*/

// const calcAverage = (a,b,c) => (a + b+ c )/ 3;
// console.log(calcAverage(3,4,5))

// //test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
// }

//   else if (avgKoalas >= 2 * avgDolphins)  {
//     console.log(`koalas win the trophy (${avgkoalas} vs. ${avgDolphins}`);
//   }
//   else {
//     console.log('No team wuins the trophy');
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// //test 2
//  scoreDolphins = calcAverage(85, 54, 41);
//  scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Stenven', 'Peter']
// console.log(friends);


// const y = new Array(1992, 5003, 2009, 3002);
// console.log(y);

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length);
// console.log(friends[friends.length -1])

// friends[2] = 'jay';
// console.log(friends);

// const firstName = 'jonas';
// const jonas = ['jonas', 'sketchman', 2037-1991, 'teacher', friends]
// console.log(jonas);
// console.log(jonas.length);


// //Exercise
// const calcAge = function(birthYeah){
//   return 2037 - birthyeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3)

// const friends = ['Michael', 'Steven', 'Peter']
// //add elements
// const newLength = friends.push('jay')
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// //remove elements
// friends.pop()
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Steven'));


// friends.push(23);
// console.log(friends.includes('Steven'))
// console.log(friends.includes('bob'));
// console.log(friends.includes(23));

// if (friends.includes('peter'));{
//   console.log('you have a friend called peter')
// }

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.
const calcTip = function(bill){
  return bill >= 50 && bill <=300 ? bill * 0.15: bill * 0.2;
}

// const calcTip = bill => bill >= 50 && <=300 ? bill * 0.15: bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];

console.log(bills, tips);