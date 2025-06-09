class User {
    constructor(username, email, password) {
        this.username=username
        this.email=email
        this.password=password        
    }
    encrytPassword(){
        return `${this.password}abc`     
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const person1=new User("George","george@gmail.com","123")
console.log(person1.encrytPassword());
console.log(person1.changeUserName());


// Behind the scene

function User(username, email, password){
    this.username=username
    this.email=email
    this.password=password 
}

User.prototype.encryptPassword=function(){
    return `${this.password}bingo`
}

User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

const person2=new User("Markel","markel@gmail.com","256")
console.log(person2.encryptPassword());
console.log(person2.changeUserName());
