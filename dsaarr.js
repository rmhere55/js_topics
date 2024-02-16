//  insertiing arr
// let data = [1,2,3,4,5,6]
// let newele = 70
// let position  = 4
// for(let i = data.length ; i >=0 ; i++ ){
//     if(i >= position){
//         data[i+1] = data[i]
//         if (i == position){
//             data[i] = newele  
//         }
//     }
// }
// // console.log(data);
// let data = [1, 2, 3, 4, 5, 6];
// let newele = 70;
// let position = 4;
// for (let i = data.length; i >= 0; i--) {
//     if (i > position) {
//         data[i] = data[i - 1];
//     } else if (i === position) {
//         data[i] = newele;
//     }
// }
// console.log(data);
 

let arr =[1,2,3,4,5]
let el = 90
let post = 2
 for( let i = 0 ; i <= arr.length ; i++){
    if (i <post){
        arr[i ] = arr[ i+1]

    }else if ( i == post){
        arr[i] = el
    }
 } console.log(arr);

// arr.sort()
// console.log(arr[arr.length-2])

let largest = arr[0]
for(let i = 0 ; i < arr.length; i++){
    if( arr[i] >= largest){
        largest = arr[i]
    }
}
// console.log(largest)
let second = arr[0]
for(let  i = arr.length-1; i <= 0 ; i--){
    if(arr[i] != largest){
        second = arr[i];
         break;
    }
}
// console.log(second )

let ssmallest = arr[1]
for(let  i = arr.length-1 ; i <= 0 ; i--){
    if(arr[i] != largest){
        second = arr[i];
         break;
    }
}
// console.log(ssmallest )/
let slargest = Number.MAX_SAFE_INTEGER
for(let i = 0 ; i< arr.length ; i++){
    if (arr[i ] >slargest && arr[i] != largest){
        slargest = arr[i]
    }
}
// console.log(slargest);


// deleting  arr
// arr sorted 
 let a = [ 2, 3, 90, 4, 5 ]
for(let i = 1 ;i<a.length ; i++){
    if(a[i] >= a[i-1]){

    }
    else{
       console.log(  false)
    }
}
console.log()