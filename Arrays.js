//  ======================= Basic of Arrays ===========
 const myArr =[0,1,2,3,4]
 const myhero = ["Rm", "suga"]
 const myArr2 = new Array(1,2,3,4,5)
//  console.log(myArr[1]);


// //  Arrays of methods 
//  myArr.push(6)
//  myArr.push(6)
//  myArr.pop()


//  myArr.unshift(9)
//  myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(newArr);
//  console.log(myArr);

//  slice splice
// console.log("A" , myArr);

// const myn = myArr.slice(1,3)
// console.log(myn);

// console.log("B" , myArr);

// const mym = myArr.splice(1,3)
// console.log("c" , myArr); 
// console.log(mym);






// learn is of from array 

 const marvel_heros =["iroman", "thor " , "spiderman"]
 const dc_heros =["superman", "flash" , "batman"]

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);
//  console.log( marvel_heros);

  const all = marvel_heros.concat(dc_heros)
  console.log(all);
const aall = [ ...marvel_heros, ...dc_heros]
console.log(aall);

const anotherArray = [1,2,2,3,3,[4,5,6][4,67,8[6,78]]]
// console.log(anotherArray);
const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray);

console.log(Array.isArray("Rm"))
console.log(Array.from("Rm"))
console.log(Array.from({name:"Rm"})) // intresting
let src = 100
let src2  = 200
let src3  = 300
console.log(Array.of(src,src2,src3));