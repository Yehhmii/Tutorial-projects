// object literals
let user = {
    name: 'kiko',
    age: 23,
    gender: 'male',
    email: 'kiko@gmail.com',
    blogs: [
        { title: 'The best way to cook', likes: 700 },
        { title: 'shortcut to cooking', likes:800}
    ],
    //trying out the methods in js (things the object can do)
    login: function(){
        console.log('The user has logged in');
    },
    logout(){               //notice that i used a shortter way to make it a function
        console.log('The user has logged out');
    },
    logblogs(){
        console.log(this.blogs);
        console.log('This user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(`The blog title is:${blog.title} and it has ${blog.likes} likes`);
        });
    }
};
user.login();
user.logout();
user.logblogs();

// console.log(user);

// //to access one of the properties from this object we can use the .notation
// console.log(user.name);  
// //we can also update a property using the .notation
// user.gender = 'female';
// console.log(user.gender);

// //instead of using .notation we can just use [] to perform all this task
// console.log(user['name']);

// user['age'] = 50;
// console.log(user['age']); 