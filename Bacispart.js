console.log("hyy")
//  =======================Opreaters================================
// console.log(9**9)  9 sqare 9
// let b2
// let c2
// let a = b2 + c2
// console.log(1 + 3 +"2")

// // console.log(typeof nan)
// console.log(2>1);
// console.log(2==1);
// console.log(2 < 1);

// they make use confuse 
// console.log(0 <= null); // ture  (comparestion conver in nulll in 0)


//================ data type summary for  inter views=====================//
// primitives 
// 7 types : String , number , boolearn , null , undefined ,symbols , bigInt 
// const score = false;
// reference type : {}, [], ()
// array , Objects , Functions 

//  const heros = ["Rm", "suga ", "jin"]
//  let  my= {
//     name :"hitashe",
//     age: 20,
//     add: "yahi"
// }
// const  f =  function (parameters) {
//     console.log("hello");
// } 
// console.log(f);

//=================================   Memory ========


// stack  (Premitive) // Heap memory( refnece data type (non primitive ))\\

// let myname = "Rm"
// let petname = "annu"
// petname ="annua "
// console.log(myname);
// console.log(petname);
// let user ={
//     email: "rajlaxmi79812@gmail.com",
//     age: 22
// }
// console.log(user);

//=================================   Stiring ========
// const  name = "Rm"
// const repo = 32
// console.log(`hello my name  is ${name} or my repo is ${repo}`)
// const game = new String ('rmsingh')
// // console.log(game[3]);
// // console.log(game.__proto__);
// console.log(game.toUpperCase());
// console.log(game.charAt(2));
// // reverse finde the character 
// console.log(game.indexOf('n'));
// const newString = game.substring(0,4)
// console.log(newString);  
// //  revese se start kre ga
// const anotherString = game.slice(-8, 4)
// console.log(anotherString);
// const newStringOne = "  hyy  "
// console.log(newStringOne)
// // whitescpce par hi work kre ga 
// console.log(newStringOne.trim());
 
// const url = "www.google.come/instagram%30fb"
//  console.log(url.replace('%30','--'));

// console.log(url.includes('hyyhrw'));
   


//=================================   Numbers========
// const score = 400
// const balanse = new Number(100)
// console.log(balanse);
// console.log(balanse.toString().length);
// console.log(balanse.toFixed(2));
// ///more use in  ecommerce aap 
// const otherNumber = 23.974
// console.log(otherNumber.toPrecision(3));
// const hundred = 100000
// // use for coma 

// console.log(hundred.toLocaleString());
// console.log(hundred.toLocaleString('en-IN'));
   



// // =========values =========
//  console.log(Number.MAX_VALUE);
//  console.log(Number.MIN_VALUE);


// ============Math ========


// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(88.95));
// console.log(Math.ceil(88.95));
// console.log(Math.floor(88.95));
// console.log(Math.min(88,34,3,22,2,1));
// console.log(Math.max(88,34,3,22,2,1));


console.log((Math.random (88,34,3,22,2,1)*10 )+1);


const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1))+ min);