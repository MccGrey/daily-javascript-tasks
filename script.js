/*
console.log('MCCGREY');

let firstName = 'joey badass';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// NEW LECTURES DATA TPES

console.log(typeof true)
let javascriptISFun = true;

javascriptISFun = 'yes!';
console.log(javascriptISFun);
console.log(typeof javascriptISFun);

let year;
console.log(year);
console.log(typeof year);

year = 1983;
console.log(typeof year);
console.log(typeof null);
*/

/*const now = 2037
const ageMccgrey = now - 1991;
const ageBarnes = now - 2018;
console.log(ageBarnes, ageMccgrey);


console.log(ageBarnes * 2, ageBarnes / 2, 2 ** 3);

const firstName = 'mccgrey';
const lastName = 'connor';
console.log(firstName + ' ' + lastName);


let x = 10 + 10;
x += 10;
x *= 4;
console.log(x);
/
*/

/*
console.log(ageBarnes > ageMccgrey);
console.log(ageBarnes >= 19);

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 26 - 10 - 5;
console.log(x, y);

*/
/*
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const Johnheight = 1.95;


const BMImark = markWeight / markHeight ** 2;
const BMIjohn = johnWeight / Johnheight ** 2;
const BMIHigherMark = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, BMIHigherMark);
*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIjohn = massJohn / heightJohn ** 2;
const BMIHigherMark = BMIMark < BMIjohn;
console.log(BMIMark, BMIjohn, BMIHigherMark);
*/
/*
const firstName = 'MccGrey';
const job = 'software Engineer';
const birthYear = 1993;
const year = 2037;

const mccgrey = "I'm" + firstName + " ,a " + (year - birthYear) + " years old" + job + "!";

console.log(mccgrey);


const mccgreyNew = `I'm ${firstName}, a ${job}, and i am  ${year - birthYear}, years old`;
console.log (mccgreyNew);

console.log(`just an veryday normal mfr`);
console.log ('string with \n\
multiple \n\
lines')

console.log(`boom
boom
boom`);
*/

/*

const age = 13;

if(age >= 18) {
 console.log('she candrive now');
}
else {
    const yearLeft = 18 - age;
    console.log(`she has to wait another ${yearLeft} to drive`)
}
;

const birthYear = 1993;
let century;
if(birthYear <= 2000) {
    century = 20;
}
else{
    century = 21
}
console.log(century);
// conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(33), 23);

//type coercion

console.log('I am ' + 23 + ' Years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;
if (money) {
    console.log("dont spend at all");
}
else {
    console.log('get working');              
}
*/
/*
const age = '18';
if (age === 18) console.log('you are an adult');


if (age == 18) console.log('you are an adult' );

const favorite = Number(prompt("whats your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
    console.log('cool! 23 is amazing')
}
else if (favorite === 7) {
    console.log('7 is cool as well');
}
else {
    console.log('just a regular number');
}

if (favorite !== 23) console.log('why not 23');
*/
/*
const hasDriverdLicense = true; //A
const hasGoodVision  = true; //B

console.log(hasDriverdLicense && hasGoodVision);
console.log(hasDriverdLicense || hasGoodVision);
console.log(!hasDriverdLicense);

const shouldDrive = hasDriverdLicense && hasGoodVision;

//if(shouldDrive) {
    //console.log('she should drive');
//}
//else {
   // console.log('omoh no try am oooo!');
//}

const isTired = true; // C
console.log(hasDriverdLicense && hasGoodVision  && isTired);

if (hasDriverdLicense && hasGoodVision && isTired) {
    console.log('she should drive ooo!');
}
else {
    console.log('someone else should drive...');
}


//switch statement
/*
const day = 'saturday';
switch(day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log ('prepare theory videos');
        console.log ('call your brethren');
        console.log ('speak to your mother');
        break;
    case 'wednesday':
    case 'thursday':
    console.log('write code examples');
    console.log ('go to the farm');
    console.log ('gym and yoga');
    break;
    case 'friday':
    console.log('record videos');
    break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
    break;
    default:
    console.log('not a valid day');
}
*/

/*
const day = 'tuesday'

if (day === "monday") {
    console.log('its gonna be a hectic day');
}
else if(day === 'tuesday') {
    console.log('fairly good, not too stressful');
}
else if (day === 'wednesday' || day === 'thursday')
{
    console.log('damn i hope i get it right');
}
else if (day === 'friday' || day === 'saturday' || 'sunday') {
    console.log('rest, you need to take a break');
}

*/
/*
const age = 23;
//age >= 18 ? console.log('i like wine') :
//console.log('i like water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


let drink2;
if (age>=18) {
    drink2 = 'wine';
}
else 
{
    drink2 = 'water';
}

console.log(drink2);

console.log(`i like to drink ${age>= 18 ? 'wine' : 'water'}`);


const tip = 0.15;
const tip2 = 0.20;
const bill = 300;

 bill >= 50 && <= 300 ? console.log(`sir your tip should be ${tip}`) :   
console.log(`sir your tip should be ${tip2}`);

value = bill + tip;
console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${value} `);

*/

/*
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`the bill was ${bill} and the tip would be ${tip} so in other words the total would be ${bill + tip}`);

*/

"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense);
console.log('i can drive leggo!!!');
*/
/*
function logger () {
    console.log('my name is mccgrey');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(3, 9);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(4,8);
console.log(appleOrangeJuice);
*/
//declaration

/*
function calcAge1(birthYear) 
{
    return 2037 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);
//declaration
const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}
const age2 = calcAge2(1993);
console.log(age2);

*/

// function expression
//const calcAge2 = function (birthYear) {
//  return 2037 - birthYear;
//}

//arrow function
/*
const calcaAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcaAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} yrears`;
}
console.log(yearsUntilRetirement(1993, 'mccgrey'));
 
*/
/*
function cutFruitsPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);

    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`

    return juice;
}
console.log(fruitProcessor(2, 3)); 
*/
/*
const calcaAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement =  function (birthYear, firstName) {
    const age = calcaAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
    console.log(`he is already retired`);
    return -1;
   }
}

console.log(yearsUntilRetirement(1991, 'lorde'));
console.log(yearsUntilRetirement(1993, 'jake paul'));
*/

/*
//ASSIGNMENT
const calAverage = (a, b, c) => (a + b +c) / 3;
console.log(calAverage(3,5,6));

let scoreDolphins = calAverage(44, 23, 71);
let scoreKoalas = calAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);


const checkWinner = function(avgDolpins, avgKoalas) {
    if (avgDolpins >= 2 * avgKoalas) {
        console.log(`GO DOLPHINS (${avgDolpins} VS. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolpins) {
        console.log(`GO KOALAS (${avgKoalas} VS. ${avgDolpins})`);
    }else {
        console.log(`no team wins`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calAverage(85, 54, 41);
scoreKoalas = calAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


*/
/*
const friends = ['micheal', 'josh', 'james'];
console.log(friends);

const years = new Array(1991, 1993, 1995, 1998);
console.log(years[0]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'drake';
console.log(friends);
const mccgrey = ['Aguonye', 'Cornelius', 2037-1991, 'dev.', friends];
console.log(mccgrey);


const calAge = function (birthYear) {
    return 2037 - birthYear;

}

const y = [1990, 1998, 1987, 1993, 1952];

const age1 = calAge(y[0]);
const age2= calAge(y[2]);
const age3 = calAge(y[4]);

console.log(age1, age2, age3);
*/
// const friends = ['micheah', 'steven', 'josh'];
// const newlength = friends.push('drake');
// console.log(friends);
// console.log(newlength);

// friends.unshift('richie');
// console.log(friends);

// friends.pop();
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);

// console.log(friends.indexOf('steven'));

// console.log(friends.includes('steven'));
// console.log(friends.includes('drake'));

// if(friends.includes('micheah')) {
//     console.log('youve got a mans in micheah')
// }
// else {
//     console.log('sorry youre a one man army')
// }

// const calTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill *.15 : bill * .2
// }

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const array = [
//     'Draco',
//     'soulja-boy',
//     2037-1997,
//     'rapper',
//     ['drake', 'kanye', 'hover', 'Nas']
// ]

// //object literal syntax

// const details = {
//     firstName: 'Draco',
//     lastName: 'soulja-boy',
//     age: 2037-1997,
//     job: 'rapper',
//     friends: ['drake', 'kanye', 'hover', 'Nas']
// }

// console.log(details);

// console.log(details.job);
// console.log(details['job']);

// const nameKey = 'Name';
// console.log(details['first' + nameKey]);
// console.log(details['last' + nameKey]);

// const interestedIn = prompt('what would you like to kow about homie? firstName, lastname, age, job, and friends');

// console.log(details[interestedIn]);

// if (details[interestedIn]) {
//     console.log(details[interestedIn])
// }else {
//     console.log('input not found, please choose between firstName, lastname, Job, age, friends');
// }

// details.location = 'L.A';
// details['hobby'] = 'art';

// console.log(details);

// console.log(`${details.firstName} has ${details.friends.length} friends, and his best friends name is' ${details.friends[0]}`);

//     const details = {
//     firstName: 'Draco',
//     lastName: 'soulja-boy',
//     birthYear: 1997,
//     job : 'rapper',
//     friends: ['drake', 'kanye', 'hover', 'Nas'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;

//         // calcAge: function() {
//         //     return 2037 - this.birthYear;
//         // }
//         calcAge: function() {
//             this.age = 2037 - this.birthYear;
//             return this.age;
//         },

//         getSummary: function() {
//             return `${this.firstName} is a ${this.calcAge()}-years old ${details.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//         }
// };

// console.log(details.calcAge());

// console.log(details.age);
// console.log(details.age);
// console.log(details.age);

// console.log(details.getSummary());

/* TASK COMPLETE
const mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,

        calcBMI: function() {
            this.BMI = this.mass / this.height ** 2
            return this.BMI
        },

    }
    console.log(mark.calcBMI());

    const john = {
        fullName: 'John Smith',
        mass: 107,
        height: 1.95,

        calcBMI: function() {
            this.BMI = this.mass / this.height ** 2
            return this.BMI
        },
    }

    console.log(john.calcBMI());

    if (mark.calcBMI() > john.calcBMI()) {
        console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})!`)
    } else {
        console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})!`)
    }
*/

//loops
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}`);
// }

/*


const jonasArray = [
    'jonas', 
    'lampard',
    2037 - 1997,
    'teacher',
    ['drake', 'neliux', 'knaye']
];

const types = []

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);


    //fillingthe typses array
// types[i] = typeof jonasArray[i];

types.push(typeof jonasArray[i]);

}


console.log(types);





const years = [1991, 1992, 1993, 1994, 1995, 1996];
const ages = [];

for (let i = 0; i < years.length; i++) {
ages.push(2037 - years[i]); 

}

console.log(ages);


// continue and break statement
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[1] === Number) break;

    console.log(jonasArray[i],typeof jonasArray[i]);
}
  
*/

//loop backwards
/*
const jonas = [
    'jonas',
    'lampard',
    2037 - 1993,
    'rapper',
    ['drake', 'kanye', 'steve']
]

for ( let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
*/
//loop in loop

/*

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------------START LIFTING WEIGHT ${exercise}`)
    
for (let rep = 1; rep < 6; rep++) {
    console.log(`exersice ${exercise}; lifthing weight repitition ${rep}`)
}

}


*/

//WHILE LOOPS
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

/*
//TASK
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

console.log(bills, tips, total);

const calAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(calAverage(total));
console.log(calAverage(tips));



*/

//===============================DEVELOPER SKILLS SECTION==============================================================

// PROBLEM:
// We work for a company building a smart home thermometer. Our recent task is this: given an array of temperatures of one DynamicsCompressorNode, calculate the temperature amplitude. keep in mind that someties there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1). undersanding the problem
// - what is temp amplitude? answer: difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error? and what to do?

// 2). Breaking up the sub-problems
// - how to ignore errors?
// - find max value in temp Array
// - find min value in temp Array
// - subtract min from max and return it

const calctempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
};
calctempAmplitude([3, 7, 4]);
//process
//max = 3
//max = 7
// 3rd iteration nothing happens because max is 7
