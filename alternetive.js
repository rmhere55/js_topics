var hasAlternatingBits = function(n) {
    let v1 = n & 1
    n>>>=1
    while( n>0){
        let v2= n&1;
        if( v1 === v2){
            return false;
        }

        v1 = v2;
     n >>>=1
    }
 return true
};
const example1 = 5;  // Binary: 101 (alternating bits)
const example2 = 11; // Binary: 1011 (not alternating bits)

console.log(hasAlternatingBits(example1)); // Output: true
console.log(hasAlternatingBits(example2)); // Output: false
