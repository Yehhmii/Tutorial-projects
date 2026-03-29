//taking conditional statements if/ if..else/ else..if/ 

//if statement
let hour = 10
if (hour < 12) {
    greeting = "Good Morning";
    console.log(greeting);
}else{
    console.log("Good day");
}

let num = 3
if (num > 0){
    console.log(`${num} is a positive number`);
}

//if...else statement
if (num < 1) {
    console.log(`${num} is a positive number`);
} else {
    console.log(`${num} is a negative number`);
}

let isRaining = true;
if (isRaining) {
    console.log("You need an umbrella");
} else {
    console.log("You don't need an umbrrlla");
}

//writing for multiple conditions   if/ else..if/ else
let a = 0;
if (a > 0) {
    console.log(`${a} is a positive number`);
} else if(a < 0) {
    console.log(`${a} is a negative number`);
} else if(a == 0) {
    console.log(`${a} is zero`);
} else {
    console.log(`${a} is not a numberx`);
}

//using switch
let weather = 'cloudy';
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break;
    case 'cloudy':
        console.log('It might be cold you need a jacket.')
        break;
    case 'sunny':
        console.log('Go out freely.')
        break;        
    default:
        console.log('No need for rain coat.');
}

//tenary operator
let isSunny = true;
isSunny
    ? console.log('No need for a rain coat')
    : console.log('You need a rain coat');


//loops  for/ while/ do...while for..of for..if
//for loops
for (let i = 0; i < 6 ; i++) {
    console.log(i);
}

//while loop
// let count = prompt('Enter a positive number: ');
// while (count > 0) {
//     console.log(count);
//     count--;
// }

//do..while.
let count = 0;
do {
    console.log(count)
    count++
}while(count < 11)

//for..of
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    console.log(number);
}

//for..each   .........it gets the index
const numr = [1, 2, 3, 4, 5]
numr.forEach((nums, i) => {
    console.log(nums, i);
});

// for..in loop  ..........we use it with object
const user = {
    firstName: 'John',
    lastName: 'Peter',
    age: 250,
    country: 'Nigeria',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js']
}
for (const key in user){
    console.log(key, user[key]);
}