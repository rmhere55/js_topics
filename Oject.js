// single literals
// const newuser = new Object()
const newuser ={}
newuser.id = "Rm"
newuser.name = "Rmsingh"
newuser.age = 21

console.log(newuser);
const regular ={
    email: "rm@gmail.com",
    fulnmane:{
        firstname : "rm",
        lastname: "singh"
    }
}

console.log(regular.fulnmane?.firstname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}

// const obj3 = {obj1 ,obj2}

const obj3 = Object.assign({}, obj1 ,obj2)
console.log(obj3);


// object litrals

// const mySym = Symbol("key01")

// const isUser = {
//     name : "Rm",
//     "fullname": "Raj Laxmi Singh",
//     [mySym]: "key01",
//      age: 21,
//      location: "punjab",
//      isloggedIn : false

//  }
// console.log(isUser.age);
// console.log(isUser["email"]);
// console.log(isUser[mySym]);
// console.log(isUser["fullname"]);

// isUser.age = 20

// Object.freeze(isUser)
// isUser.age =22
// console.log(isUser);



