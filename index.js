let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


let person = {
    name: 'Donovan',
    age: 45
};

// Dot notation
person.name = 'Dee';

//bracket notation
person['name'] = 'Luke';
let selection = 'name'
person[selection] = 'Natalie';

console.log(person.name);


//ARRAYS
let selectedColors = ['red', 'blue'];
console.log(selectedColors);


function greet(name) {
    console.log('Hello ' + name);
}
greet('Donovan!');

function square(number) {
    return number * number;
}

console.log(square(2));
