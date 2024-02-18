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
 

// let arr =[1,2,3,4,5]
// let el = 90
// let post = 2
//  for( let i = 0 ; i <= arr.length ; i++){
//     if (i <post){
//         arr[i ] = arr[ i+1]

//     }else if ( i == post){
//         arr[i] = el
//     }}
// //  } console.log(arr);

// // arr.sort()
// // console.log(arr[arr.length-2])

// let largest = arr[0]
// for(let i = 0 ; i < arr.length; i++){
//     if( arr[i] >= largest){
//         largest = arr[i]
//     }
// }
// // console.log(largest)
// let second = arr[0]
// for(let  i = arr.length-1; i <= 0 ; i--){
//     if(arr[i] != largest){
//         second = arr[i];
//          break;
//     }
// }
// // console.log(second )

// let ssmallest = arr[1]
// for(let  i = arr.length-1 ; i <= 0 ; i--){
//     if(arr[i] != largest){
//         second = arr[i];
//          break;
//     }
// }
// // console.log(ssmallest )/
// let slargest = Number.MAX_SAFE_INTEGER
// for(let i = 0 ; i< arr.length ; i++){
//     if (arr[i ] >slargest && arr[i] != largest){
//         slargest = arr[i]
//     }
// }
// // console.log(slargest);


// // deleting  arr
// // arr sorted 
//  let a = [ 2, 3, 90, 4, 5 ]
// for(let i = 1 ;i<a.length ; i++){
//     if(a[i] >= a[i-1]){

//     }
//     else{
//        console.log(  false)
//     }
// }
// // console.log(true) 

// // brute force
// let ar = [1,1,2,3,2,3]
// let st = new Set()
// for(let i = 0 ; i< ar.length ; i++){
//     st.add(ar[i])
// }
// // console.log(st);

// // 2 pointer  [1 check 2 pointer is eq or not that it ]
// let i = 0 
//  for ( let j = 1 ; j <ar.length ; j++){
//     if (ar[i] != ar[j]){
//         ar[i+1] =ar[j]
//         i++
//     }}
// //  } console.log(i+1) /


// //   left rotate the arr by one place 
// let b = [1,2,3,4,5,6,7]
// // only given arrr
//  let temp = b[0]
//   let n = b.length
//  for(let i = 1 ; i< b.length ; i++){
//     b[i-1] = b[i]
//  }
//  b[n-1] =temp
// //   console.log(b);
// let temp1 = [1,2,3]


//   left rotate array by d   place 
let nums = [1,2,0,0,5,6,7]
let k = 3
// var rotate = function(nums, k) {
    k = k % nums.length;
    
    // Extract the last k elements
    let lastEl = nums.splice(-k);
    
    // Add the extracted elements to the beginning of the array
    nums.unshift(...lastEl);
    
    console.log(nums);

    // let n = [1,2,3,4,5,6,7]
    // let m = 2
    // m = m%n.length
    // let ne = n.slice(-m)
    //  n.unshift(...ne)
    //  console.log(n)
    let n = [1, 2, 3, 4, 5, 6, 7];
let m = 2;
m = m  %  n.length; // Calculate effective rotation amount
let ne = n.slice(-m); // Extract last `m` elements
n.unshift(...ne); // Add extracted elements to the beginning of the array
console.log(n); // Output the rotated array
