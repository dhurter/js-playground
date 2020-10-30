// Function declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function() {
    console.log('run');
};

// Named Function Expression
let run2 = function run() {
    console.log('run');
};

//// * Hoisting - process of moving function declaration to the top of 
//// * the file, handled by the javascript engine automatically



// Getters and setters
const person = {
    firstName: 'Donovan',
    lastName: 'Hurter',

    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// try {
//     person.fullName = null;    
// }
// catch (e) {
//     alert(e);
// }

console.log(person.fullName);
