
const person = {
    firstName: 'Donovan',
    lastName: 'Hurter',

    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//person.fullName = 'Bob Loblaw';
console.log(person.fullName);
