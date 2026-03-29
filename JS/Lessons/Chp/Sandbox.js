// //To create a Variable in js that can be changed
// let age = 25;
// let year = 2023;

// console.log(age, year);

// age = 356;
// console.log(age);

// //To create a variable in js that can't be changed
// const points = 200;
// console.log(points);

// //originally to create varibles in js we used
// var amount = 827;
// console.log(amount);

// //Strings Data type in js
// console.log('Hello World');

// let email = 'franahu@gmail.com';
// console.log(email);

// //String Concatenation (joining two or more strings together)
// let firstName = 'Kiko';
// let secondName = 'Love';

// let fullName = firstName + " " + secondName;
// console.log(fullName);

// // getting a character
// console.log(fullName[0]);

// //getting the string length
// console.log(fullName.length);

// //String methods
// console.log(fullName.toUpperCase());
// let results = fullName.toLowerCase();
// console.log(results, fullName);

// let index = email.indexOf('@');
// console.log(index);


// //Number Data Type in js 
// let radius = 10;
// const pi = 3.14;
// // console.log(radius, pi);

// //maths operators +, -, *, /, **, %
// console.log(10/2);

// let result = radius % 3;
// let area = pi * radius ** 2;
// console.log(result, area);

// //order of operation - B I D M A S
// let order =  5 * (10-3)**2;
// console.log(order);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes += 10;
// likes -= 5;
// likes *= 5;
// likes /= 2;
// console.log(likes);

//NAN not a number
// console.log('hello' / 5);
// console.log(5 * 'hello');

// console.log('You have' + likes + 'likes');

//template string
// const title = 'The Best Food';
// const chef = 'Yehhmii';
// const likes = 90;

// let html = `
//     <h1>The owner of ${title}</h1>
//     <p>Who is ${chef}</p>
//     <span>Has ${likes} likes</span>
// `;

// console.log(html);

// //concatenation way
// let show = 'The owner of ' + title + ' who is ' + chef + ' has ' + likes + ' likes';
// console.log(show);

//Object Data type (Arrays)
// let food = ['Rice', 'Beans', 'Spagetti'];
// food[1] = 'Bread'
// console.log(food.length);

//Array methods
// let drinks = food.join('/');
// let drinks = food.indexOf('Rice');
// let drinks = food.concat(['Pizza', 'Shawarma']);
// let drinks = food.push('Moimoi');
// drinks = food.pop('Rice');


// console.log(food);
// console.log(drinks);






//chapter 3 control flow -- loops and conditional statement

// for (i = 0; i < 10; i++){
//     console.log(i);
// }

// const names = ['John', 'Peter', 'Kiko'];
// for (i = 0; i < names.length; i++){
//     let html = `<div>His name is: ${names[i]}</div>`;
//     console.log(html);
// }

// i = 0;
// while(i < 50){
//     console.log('you have:' ,i);
//     i++;
// }

//functions there are two ways 1.declara the function 2.express a function
//1. to declara a function
// function word(){
//     console.log('we living in the best world');
// }
// word();  //and we can call this as many times as we want

//2. to express a function
// const people = function(){
//     console.log('kiki', 'koko');
// };
// people();

// using an arrow function
// const people = () => {
//     console.log('kiki', 'koko');
//};
// people();

//arguments and parameters
// const learn = function(name = 'Mic', time = 'morning'){
//     console.log(`${name} is coming at ${time}`);
// };
// learn();
// learn('kiko', 'noon');

//returning a value 
// const calArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// };
// const area = calArea(5);
// console.log(area);


// a. converting to arrow functions
// const greet = () => {
//     return 'hello world';
// };
// const results = greet();
// console.log(results);

// b. to make it even more shorter
// const greet = () => 'hello world';
// const results = greet();
// console.log(results);





