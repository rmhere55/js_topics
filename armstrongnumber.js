'use strict';

process.stdin.setEncoding('utf-8');

function check_armstrong(n){
     /*Function to check whether a number is an armstrong number or not
        Print true if yes else false */;

        let count = 0;
        let copy=n;
        let sum =0;
       let rem ;
    while(  n > 0){
      rem = n%10;
// console.log(rem);
n= Math.floor(n/10) ;
count++ ;
}

n=copy

while(n>0)
{
    let digit=n%10; 
    sum =sum + Math.pow(digit,count)
    n= Math.floor(n/10) ;

}
 console.log(copy === sum)
 

    // console.log(copy);
    // check and print 2asy nhi pta 
    
}



//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            // console.log(inputArr);
            check_armstrong(parseInt(inputArr[0]))
            process.exit();

        })

}
readInput();
//========== User's Code Ends Here ==========
         

    //   ? reverse number //
    

//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');
/**
 * @return {number}
 * @param {int} n
 */
let num
function reverse(n){
    /* Function to return the reverse of a number n */
       num = n.toString().split("").reverse().join("");
    return parseInt(num, 10);
}

//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            // console.log(inputArr);
            console.log(reverse(parseInt(inputArr[0])))
            process.exit();

        })

}
readInput();
//========== User's Code Ends Here ==========
