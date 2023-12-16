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