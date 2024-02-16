// class User{
//     constructor(username){
//         this.username = username;

//     }
//     logMe (){
//         console.log(`username $this.username`)
//     }
//    static createId(){
//         return '123'
//     }
// }
// const rm = new User ("Rajlaxmi")
// console.log(rm.createId())

// class Teacher extends User{
//     constructor (username , email){
//         super(username)
//         this.email = email;
//     }
// } 
// const iphone = new Teacher("iphone " ,"iphone@gmail.com")


// Get the current date
let currentDate = new Date();

// Subtract 1435 days
let newDate = new Date(currentDate);
newDate.setDate(currentDate.getDate() - 1435);

// Display the result
console.log("Current Date:", currentDate.toDateString());
console.log("Date 1435 days ago:", newDate.toDateString());
