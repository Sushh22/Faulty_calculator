let a = prompt("Enter first number");
let b = prompt("Enter second number");
let op = prompt("Enter the operator");
let random = Math.random();
let obj = {
  "+": "-",
  "-": "/",
  "/": "**",
  "*": "+",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
} else {
  console.log(random);
  op = obj[op];
  alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}
