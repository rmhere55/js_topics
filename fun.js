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