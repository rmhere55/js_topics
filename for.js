// for in 

// const myObject = {
//     'js' : "javascript",
//     'cpp' : "c++",
//     'rb ': "ruby"
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
//     console.log(`${key} shortcut key is for ${myObject[key]}`);
// }

//  const programing = ["js","rb", "py", "jaca","cpp"]

//  for (const key in programing) {
//     console.log(key , programing[key]);
//  }

 
// const map = new Map()
// map.set('IN', "india")
// map.set('en', "england")
// // console.log(map);
//  for (const key in map) {
//     console.log(key);
//  }
//  yaha par itrestion nhi hogi 

//  for (const [key,value] of  map){
//     console.log( key , ':-' , value);
//  } 



// for each 



const coding = ["js","rb", "py", "jaca","cpp"]
// call back function ka naam nhi hota hai 
// coding.forEach( function (item){
//  console.log(item);
// } )


// coding.forEach( ( item) =>{ 
//     console.log(item);
// })


// coding.forEach( ( item ,index , arr) =>{ 
//     console.log(item , index , arr );
// })

// function printme(item) {
//     console.log(item);
// }
// // coding.forEach(printme)


//  const mycoding = [
//     { language : "js",
//    languadefilename :"js" },
// { language : "c++",
// languadefilename :"cpp"
// },
// { language : "java",
// languadefilename :"java"
// }
//  ]

// mycoding.forEach( (item)   =>  {
//     console.log(item.languadefilename);
// })


// const num = [1,2,3,4,5,6,7,8,9,10]
// const  num2 = num.filter( (value)=> {
//  console.log(value);
//  return value > 4  
// // })

 
// const newnum = []
// num.forEach ((num2) =>{
//     if (num2 >3 ){
//         newnum.push(num2)
//     }
// })
// console.log(newnum);

//  books examlpe
 const book =[
    {title: 'firs' , type : 'history' , publish : 2005 , edition : '2010'},
    
    {title: 'firs' , type : 'history' , publish : 2005 , edition : '2010'}
 ,
 {title: 'firs' , type : 'history' , publish : 2005 , edition : '2010'}
 ,
 {title: 'firs' , type : 'history' , publish : 2006 , edition : '2010'}
 ,
 {title: 'firs' , type : 'history' , publish : 2005 , edition : '2010'}
 ,
 
 ]
 let userbook =  book.filter((bk)=> bk.type === 'history');
 userbook = book.filter((bk)=> { 
    return bk.publish > 2005 && bk.type == 'history'})
 console.log(userbook);