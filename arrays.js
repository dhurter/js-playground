
// const numbers = [3, 4];
// numbers.push(5, 6);
// numbers.unshift(1, 2);
// console.log(numbers);

// // Finding primitives
// const numbers = [1, 2, 3, 1, 4]
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(1));

// // Finding Elements (reference types)
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' }
// ]


// // const course = courses.find(function(course) {
// //     return course.name === 'a';
// // })
// // better way
// const course = courses.find(course => course.name === 'a');

// console.log(course);



// // Spread operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, ...second];

// const copy = [...combined];
// console.log(copy);


// Sorting
// const numbers = [2, 3, 1];
// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// Filtering
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value) {
//     return value >= 0;
// });

const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

//const items = filtered.map(n => '<li>' + n + '</li>');
//const html = '<ul>' + items.join('') + '</ul>';
//console.log(html);

// const items = filtered.map(n => {
//     return { value: n };    
// });

//const items = filtered.map(n => ({ value: n }) );

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

console.log(items);


