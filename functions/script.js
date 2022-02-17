// # FUNC 1
const getSenseOfLife = () => 42;

// TEST DATA
const res = getSenseOfLife();
console.log(res);

// #FUNC 2

const getSquared = (num) => num * num;
// TEST DATA
console.log(getSquared(5));
console.log(getSquared(10));

// # FUNC 3

function sum(number1, number2) {
 return number1 + number2;
}
console.log(sum(2, 3));

// TEST DATA
const first = 8;
const second = 10;
console.log(sum(first, second));

// #FUNC 4
function print(age) {
 console.log(` I am ${age} years old`);
 console.log(` Sense of life is ${getSenseOfLife()}`);

}
// TEST DATA
print(28);

// #FUNC 5

const mult = (firstNum, secondNum) => firstNum * secondNum;
// TEST DATA

console.log(mult(2, 5));

// #FUNC 6
const square = (number) => number * number;

// TEST DATA
console.log(square(2));

// #FUNC 7
const getMagicNumber = () => 17;
// TEST DATA
console.log(getMagicNumber());


function sendEmail(userId) {
  //
  const email = getEmailById(userId);
  // send email
}