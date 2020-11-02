

// Write a function that takes two numbers and returns the maximum of the two.
// let num = maxOfTwo(99, 91);
// console.log(num);

// function maxOfTwo(i, x) {
//     return (i > x) ? i : x;
// }

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
    var output = '';
    
    if (typeof input !== 'number') {
        return 'Not a number';
    }
    
    if (input % 3 === 0) {
        output += 'Fizz';
    }
    if (input % 5 === 0) {
        output += 'Buzz';
    }
    return input;
}


// Count Truthy
// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

// show stars
showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

// show primes
showPrimes(40);
function showPrimes(limit) {            
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }    
}

function isPrime(number) {    
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}

