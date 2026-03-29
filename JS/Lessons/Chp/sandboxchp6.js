//$making a refence or query to the html page to select a particular element$

//1.to get a class we can use (.thename or div.thename)
// const para = document.querySelector('p');    
// console.log(para);

// //2.if we want to get more than one  element
// const paras = document.querySelectorAll('p');
// console.log(paras);

//$other ways of selecting include$
//3. get an element by id
// const title = document.getElementById('page-title');
// console.log(title);

// //4.get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// //5.get elements by their tag name
// const tags = document.getElementsByTagName('p');
// console.log(tags);

//$changng text inside an element $
// const para = document.querySelector('p');
// para.innerText = 'We have over ride this text';   //and we can use += to add to the old text

// const paras = document.querySelectorAll('p');
// paras.forEach(pa => {
//     pa.innerText += ' added new text';
// });
 
// //changing html inside an element
// const content = document.querySelector('.content');
// content.innerHTML = '<h3> this is a changed html<h3>';

// //lets add an array of content
// const people = ['Joy', 'Emma', 'David', 'John'];
// people.forEach(person => {
//     content.innerHTML += `<p>Name is: ${person} </p>`;
// });

// // getting an attribute
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.theboys.com');
// link.innerText = 'The Boys';

// const err = document.querySelector('p');
// console.log(err.getAttribute('class'));
// err.setAttribute('class', 'succes');
// err.setAttribute('style', 'color: green;');

// //another way of styling and element without overiding it,  just adding to it
// const sty = document.querySelector('h2');
// console.log(sty.style);         //to see all the differrnt style names in js

// sty.style.margin = '30px';      //adding to the style
// sty.style.color = 'crimson';       //overiding an existing one
// sty.style.fontFamily = 'monospace';   //using a two block type of styling name


//$geting classes, adding and removing$
// const content = document.querySelector('p');

// console.log(content.classList);
// // adding a class 
// content.classList.add('success');
// //removind a class
// content.classList.remove('error');

//$trying to cycle through
const cycle = document.querySelectorAll('p');
 
cycle.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    if(para.innerText.includes('success')){
        para.classList.add('success');
    }

});