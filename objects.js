
// // Factory Function
// function createCirle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     }
// }

// const circle1 = createCirle(1);
// console.log(circle1);

// const circle2 = createCirle(2);
// console.log(circle2);

// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);


// Enumerating properties in an object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }    
}

// for (let key in circle)
//     console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//     console.log(key);

// for (let entry of Object.entries(circle))
//     console.log(entry);


// Cloning an object

// old way
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// new way
//const another = Object.assign({}, circle);
// even better - spreader
const another = { ...circle };
console.log(another);
