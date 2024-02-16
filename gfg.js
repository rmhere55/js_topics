 function countOfElements(arr,n,x) {
    //code here
    let count = 0
    for (let i =0 ; i < n  ; i++){
        if( arr[i] <= x){
            count++
            
        }
        }  return count
    
}
console.log(countOfElements([1,2,3,4],4,5));