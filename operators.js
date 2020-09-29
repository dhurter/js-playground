let x = 10;
let y = 3;


// //Arithmetic
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// //Increment (++)
// console.log(x++);
// console.log(x);

// //Decrement (--)
// console.log(--x);

// Equality
console.log('Strict Equality (Type + Value)');
console.log(1 === 1);
console.log('1' === 1);

console.log('Loose Equality (Value)');
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


// Logical
console.log('Logical');
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && false);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible for Loan', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

console.log('Short Circuiting');
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Operator Precedence
x = 2 + 3 * 4;
console.log(x);



// Exercise
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;


console.log(a);
console.log(b);