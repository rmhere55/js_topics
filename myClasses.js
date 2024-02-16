// E6
 class User {
    constructor(username ,  password){
        this.username = username;
        // this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return`${this.username.UpperCase()}`
    }
 }

class Teacher extends User{
    constructor (username, email, password){
        super(username,password)
        this.email = email;
        
    }
    addCoure(){
        console.log(`A new course was added by ${this.username}`)

    }
}


 const chai = new Teacher("chai" , "chai@gmail.com ", "123")
//   console.log(chai.encryptPassword());
console.log(chai);
chai.addCoure();
