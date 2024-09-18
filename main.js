//  alert("Hello World");
// string methods & properties
// let myVar = "Mathematics"
// let myNo = 47
// let xyz =
// string conca.....
// console.log(myVar.length);
// console.log(myVar.charAt(7));
// console.log(myVar.indexOf("e"));
// console.log(myVar.indexOf("mat"));
// console.log(myVar.lastIndexOf("t"));
// console.log(myVar.slice(3, 7));
// console.log(myVar.split('e'));
// console.log(myVar.split(''));
// console.log(myVar.toUpperCase());
// console.log(myVar.toLowerCase());
// console.log(myVar.includes('me'));
// console.log("frontend, is, fun".split(','));

// nunmber methods & properties 2nd class for javascripts

let myVar = "47";
console.log(Number(myVar));
// this is temporary myVar is still string
console.log(typeof myVar);
console.log(typeof Number(myVar));
let myNo = Number(myVar);
// it is now a number
console.log(typeof myNo);
console.log(Number("dave"));
console.log(Number("undefined"));
console.log(Number(true));
console.log(Number(false));
// integer is asking if it's an interger
console.log(Number.isInteger(myVar));
console.log(Number.isInteger(47.39));
console.log(Number.isInteger(50));
console.log(Number.parseFloat("39.34abc"));
console.log(Number.parseFloat("3abc.49"));
let myFloat = 397.45376;
console.log(myFloat.toFixed(3));
console.log(Number.parseInt(397.45376));
console.log(Number.parseInt("397.45376"));
console.log(myFloat.toString());
let myInt = 300;
console.log(myInt.toString());
console.log(Number.parseFloat("435.794qwe").toFixed(2));

// math properties

console.log(Math.PI);
// math methods
console.log(Math.trunc(Math.PI));
// trunc cuts
console.log(Math.trunc(3.7));
// round roundup to the next interger(wholenumber)
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));
console.log(Math.pow(3, 3));
console.log(Math.min(5, 3, 0.19, 0.18, 0.173));
console.log(Math.max(5.1, 5.11, 5.111, 5.12));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));
// class activities
console.log("Gloria".charAt(Math.floor(Math.random() * "Gloria".length)));
console.log("Gloria".charAt(Math.floor(Math.random() * "Gloria".length)));
let name = "Bunmi";
console.log(name.charAt(Math.floor(Math.random() * name.length)));

// conditionals: if statement, switch.

// let soup = "Vegetable"
// let reply;

// if (soup) {
//   reply = `Here's your order of ${soup}.`;
// } else {
//   reply = "No soup available";
// }
// console.log(reply);

let soup = "Vegetable";
let crackers = true;

if (soup && crackers) {
  reply = `${soup} and crackers are available`;
} else if (soup) {
  reply = `we have only ${soup}`;
} else {
  reply = "No food";
}
console.log(reply);

let examScore = 79;
let retStudent = true;
let grade;

if (examScore >= 80) {
  reply = "A+";
} else if (examScore >= 70) {
  reply = "A";
} else if (examScore >= 60) {
  reply = "B";
} else if (examScore >= 50) {
  reply = "C";
} else {
  if (retStudent) {
    reply = "unsatisfactory";
  } else {
    reply = "you tried";
  }
}

console.log(reply);

// ass

let stew = "egusi";
let yam = true;
let bannedCustomer = true || false;

if ((bannedCustomer = true)) {
  reply = "BANNED! You are not allow to use this website.";
} else if (stew) {
  reply = `We have only ${stew}`;
} else {
  if (stew && yam && bannedCustomer) {
    reply = `${stew} and yam are available`;
  } else {
    reply = "No food";
  }
}

console.log(reply);

let testScoreOne = 50;
let testScoreTwo = 70;
let avrDer = testScoreOne + testScoreTwo / 2;

if (testScoreOne >= 50) {
  reply = `Test score two is ${testScoreTwo}.`;
} else {
  reply = "Your test score is too low to view test score two.";
}

console.log(reply);
console.log(avrDer);

if (avrDer >= 60) {
  reply = "Your average score is too low, kindly please reseat";
} else {
  reply = `Your average score is ${avrDer}. Your have a scholarship`;
}
console.log(reply);

// day 3

// switch statement
switch (2) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("No match.");
}

// ternacy operator
// condition ? if true : if false (let response)
let drink = "juice";
let response = drink ? `we have ${drink}.` : "no cold drink";

console.log(response);

// C.A

let fruit = "apple";
let price = "$40";
let food = fruit
  ? `${fruit} is available and it costs ${price}`
  : "not available";

console.log(food);

let foodOne = "bread";
let foodTwo = "sardine";
let costOne = 1200;
let costTwo = 1200;
let costOfFood;

if (foodOne && foodTwo) {
  costOfFood = `${foodOne} and ${foodTwo} are available and the total is $${((costOne + costTwo) / 1665).toFixed(2)}.`;
  console.log(costOfFood);
} else if (foodOne){
  costOfFood = `${foodOne} is available and it costs $${(costOne / 1665).toFixed(3)}.`;
  console.log(costOfFood);
} else if (foodTwo){
  costOfFood = `${foodTwo} is available and it costs $${(costTwo / 1665).toFixed(3)}.`;
  console.log(costOfFood);
} else {
  console.log("No food available.");
}

// ass convert input string to propercase

let inpStr = "abolaji motunde bimpe";
console.log(inpStr.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' '));