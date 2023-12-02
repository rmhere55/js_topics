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

let myname = "Rm"
let petname = "annu"
petname ="annua "
console.log(myname);
console.log(petname);
let user ={
    email: "rajlaxmi79812@gmail.com",
    age: 22
}
console.log(user);

//=================================   Stiring ========
const  name = "Rm"
const repo = 32
console.log(`hello my name  is ${name} or my repo is ${repo}`)
const game = new String ('rmsingh')
// console.log(game[3]);
// console.log(game.__proto__);
console.log(game.toUpperCase());
console.log(game.charAt(2));
// reverse finde the character 
console.log(game.indexOf('n'));
const newString = game.substring(0,4)
console.log(newString);  
//  revese se start kre ga
const anotherString = game.slice(-8, 4)
console.log(anotherString);
const newStringOne = "  hyy  "
console.log(newStringOne)
// whitescpce par hi work kre ga 
console.log(newStringOne.trim());
 
const url = "www.google.come/instagram%30fb"
 console.log(url.replace('%30','--'));

console.log(url.includes('hyyhrw'));
