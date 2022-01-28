let a = prompt('Enter the first no: ');
let b = prompt('Enter the second no: ');
let temp;
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);