// Map

const num = [1,2,3,4,5,6,7,8,9,10]
// const newnum = num.map((num) => num+10 )

// chaning 

const newnum = num.map( (num2) => num2 * 10 ).map((num2)=>  num2+1)
.filter((num2) => num2 >= 40)
 console.log(newnum);