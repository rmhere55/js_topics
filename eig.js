const num = [1,2,3,4]

// const mytotal = num.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc+ currval
// } , 3)

// const mytotal = num.reduce((acc , currval)=> acc+ currval    ,0)

// console.log(mytotal);

const soppincart =[
    { itemname: "js cousre",
      price:999
},
{ itemname: "java cousre",
price:99
},
{ itemname: "py cousre",
price:9
},
{ itemname: "data science cousre",
price:1299
},
]

 const pricetopay = soppincart.reduce(( acc , item) =>  acc + item.price, 0)
 console.log(pricetopay);