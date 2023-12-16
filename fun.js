//  one(5)
//  function one(num) 
//  {
//   return num+1;
//  }
// const h = function two(num) {
//     return num +2;
    
// }
// two()

// const user ={
//     user:"hy",
//     price:"99",

//      wecol : function () {
//         console.log(`${this.user} , welcome `);
//         console.log(this);
//      }
// }
// user.wecol() 
// user.user ="sam"
// user.wecol()

// function chai (){
//    console.log(this);
// }
// chai()

//  const  chai = function () {
// let username = "hetaish";
//    console.log(this.username);
// }
// chai()
//  const chai  = () =>{
//    let username = "RM"
//    console.log(this);



//  }
//  chai()


//  arrow function 
       
 const one =(num , nn)=>(num+nn)
 
 const onew =(num , nn)=> num+nn
  
const add =(num,nu)=>({username:"Rm"})



 const adddtwo =(num, num2)=>{
         return num + num2;

 }  
 console.log(adddtwo(2,3));
 
//  ifie  concept 
// if aap iffe ko likho gye 2 iffe ko ek sath then apko 1 iffe ke bad ; semicolon laga hoga nhi to error aaye ga .
 
 
 
 (
 function ns() {
   console.log(`db connect`);
 }) ();
//  here use it 
  ( ( name)=>{
   console.log(`arrowfunction ${name}`);
  })("Rm");



  // if 
if (condition){

}

switch (key) {
    case value:
        
        break;

    default:
        break;
}
//  turty or falsely 
const useremail = "hitalshe.ai"

if (useremail){
    console.log("we got it");
} else {
    console.log("dont got it.");
}

// falsely
// false , 0 , NaN , -0 , bigint 0n , "" , null , undefined 

// turely 
// "0" , "false" ,"" ,[] ,{} ,function (){}


if (useremail.length === 0){
    console.log("array is empty");
}

const emptypbj ={

}
if (Object.keys(emptypbj).length === 0)
{
    console.log(" object is empty");
}


//  console  par kam 
// false == 0  :- true 
// false = "" :- true
// 0 ="" true


// Nullish conescing operator (??) : null undefined
let val1 
// val1 = 5 ?? 10

val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10?? 20  

console.log(val1);


// terniary operater 
//  condition ? true  :  false 
const ice = 100;
icetea >= 80 ?console.log("les then 8")  : console.log("more than 80");;