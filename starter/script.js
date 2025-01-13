'use strict';

// let hasDriversLicense = false;
// const passTest = true;
 
// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('i can drive very well');

// const interface = 'Audio'

function logger(){
  console.log('my name is jonas');
}

logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
console.log(apples, oranges);
const juice = `juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}

const applejuice = fruitProcessor(5,0);
console.log(applejuice);
console.log(fruitProcessor(5,0));
