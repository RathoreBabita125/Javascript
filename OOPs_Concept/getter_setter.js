class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password.toUpperCase()}marge`;
    }
    set password(password){
        this._password=password
    }

}
// const person=new User("George","gg@fb.com","abc")
// console.log(person.password);
// console.log(person.email);


// Define Property 

function newUser(username,email,password){
    this._username=username
    this._email=email
    this._password=password

    Object.defineProperty(this,'username',{
        get: function(){
            return `${this._username} Rathi`
        },
        set: function(value){
            this._username=value
        }
    })

     Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
}
// const person=new newUser("Arav","av@gmail.com","xyz")
// console.log(person.username);
// console.log(person.email);


// Object based

const UserOne={
    _username:"Havard",
    _email:"gg@gmail.com",
    _password:"a2b",

    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username=value
    }
}

const person=Object.create(UserOne)
console.log(person.username);






