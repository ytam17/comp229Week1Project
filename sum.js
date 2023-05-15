let num1 = 5;
let num2 = 10;

function sum(a, b) {
  return a + b;
}

let sum1 = (a, b) => a + b;

let sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

console.log(sum(num1, num2));
console.log(sum(...[4, 3]));
