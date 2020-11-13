
// let x = function() {
//     console.log("I am called from inside a function.")
// };

// let y = function(callback) {
//     console.log('Do Something');
//     callback();
// }

// console.log(y(x));

let add = function(a,b){
    return a+b;
}

let multiply = function(a,b) {
    return a*b;
}

let calc = function(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 3, add));
