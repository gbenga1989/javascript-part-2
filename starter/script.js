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
// const calcTip = function(bill){
//   return bill >= 50 && bill <=300 ? bill * 0.15: bill * 0.2;
// }

// // const calcTip = bill => bill >= 50 && <=300 ? bill * 0.15: bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];

// console.log(bills, tips);

// const jonas = {
//   firstName: 'jonas',
//   lastName: 'screwtman',
//   age:2037 - 1991,
//   job: 'teacher',
//   friends: ['michael', 'peter', 'steven']
// };
// console.log(jonas.lastName);
// console.log(jonas['lastName'])


// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('what do you want to know about jonas? choose betweeen firstName, lastName, age, job and friends');

// if(jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// }
// else{
//   console.log('wrong requwst! choose betweeen firstName, lastName, age, job and friends')
// }

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonalshmat';
// console.log(jonas);

// //challenge
// //'jonas has 3 frieds, and his best friend is called michael'
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);


//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//   // calcAge: function(birthyeah){
//   //   return 2037 - this.birthYeah
//   // }

// //   calcAge: function(){
// //     console.log(this);
// //     return 2037 - this.birthYeah
// //   }
// // };

// calcAge: function(){
//   this.age = 2037 - this.birthYeah;
//   return this.age;
// },
// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);


// console.log(jonas['calcAge'] (1991));

//challenge
//jonas if a 46 year old teacher and he has a drivers license

// console.log(jonas.getSummary())

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
  
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
// }
// }


// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// // John Smith's BMI (28.3) is higher than Mark Miller's (23.9)

// if(mark.bmi > john.bmi){
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`)
// } else if (mark.bmi > john.bmi){
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI(${mark.bmi})`)
// }

// console.log('lifting weigts repetition 1');
// console.log('lifting weigts repetition 2');
// console.log('lifting weigts repetition 3');
// console.log('lifting weigts repetition 4');
// console.log('lifting weigts repetition 5');
// console.log('lifting weigts repetition 6');
// console.log('lifting weigts repetition 7');
// console.log('lifting weigts repetition 8');
// console.log('lifting weigts repetition 9');
// console.log('lifting weigts repetition 10');

// for loop keeps running while condition is true
// for(let rep = 1; rep <= 10; rep++){
//   console.log(`lifting weigts repetition ${rep}`);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// const types = [];


// for(let i = 0; i <  jonas.length ; i++){
//   console.log(jonas[i], typeof jonas[i]);

//   types[i] = typeof jonas[i];

//   types.push(typeof jonas[i]);
// }

// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i]);
// }
// console.log(ages);


// //continue and break statement
// console.log('---ONLY STRINGS---')
// for(let i = 0; i <  jonas.length ; i++){
//   if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---BREAK WITH NUMBER---')
// for(let i = 0; i <  jonas.length ; i++){
//   if(typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// // 0,1-4
// // 4-0

// for(let i = jonas.length - 1; i>= 0; i-- ){
//   console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++)
// {
//   console.log(`----starting exercise ${exercise}`)

//   for (let rep = 1; rep < 6; rep++ ){
//     console.log(`Exercise ${exercise} lifting weight repetition ${rep}`)
//   }
// }

// for(let rep = 1; rep <= 10; rep++){
//   console.log(`lifting weigts repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10){
//   // console.log(`WHILE: lifting weigts repetition ${rep}`);
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6){
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// } if (dice === 6) console.log('loop is about to end.... ')



// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill * 0.15: bill * 0.2;
  }

  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];

  for(let i =0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }

  console.log(bills, tips, totals);

  const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ){
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log (calcAverage([2,3,7]));
  console.log (calcAverage(totals));
  console.log (calcAverage(tips));