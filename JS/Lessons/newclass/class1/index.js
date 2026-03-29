// Note in js []array {}Object ()parenthese
 
// let firstName = 'Peter';
// let lastName = 'John';
// let age = 23 ;
// let city = 'Abuja';
// let country = 'Nigeria';
// let language = 'Hausa';
// let sex = 'Male';

// //using ES6
// let details = `My name is ${firstName} ${lastName} i am of age ${age}, the city i come from is ${city}, my nationality is ${country}, the lauguage i speak is ${language} and my sex is ${sex} `;
// console.log(details);

// //using push and shift
// let numbers = [1,2,3,4,5];
// numbers.push(3);
// numbers.shift();
// console.log(numbers);










// constructors   is a defined property of a function or a class 
const person = function(firstName, birthYear){
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}
const human = new person("john", 1991);
console.log(human);
console.log(person.prototype);
 
const Product = function(prodId, prodName, prodPrice, prodDescription){
    this.prodId = prodId;
    this.prodName = prodName;
    this.prodPrice = prodPrice;
    this.prodDescription = prodDescription;
}
const Product1 = new Product(1, "shoes", 12.3, "Easy wear");
console.log(Product1); 

const Product2 = new Product(2, "glasses", 2.3, "Good Glass");
console.log(Product2); 

// classes 
// class declaration
class personC1 {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2023 - this.birthYear);
    }
}

const mike = new personC1('mike john', 1990);
console.log(mike);
mike.calcAge();

class CarClass {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

const camry = new CarClass('camry', 120);
camry.accelerate();
camry.brake();