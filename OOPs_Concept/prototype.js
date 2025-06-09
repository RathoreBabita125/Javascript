let myName="Marge     "
// console.log(myName.length);
// console.log(myName.trueLength);


const myObj={
    username:"George",
    email_id:"george@gmail.com",
    perform:function(){
        console.log(`The performance of ${this.username} is excellent`);    
    }
}

const myArr=[10,"George",true]

Object.prototype.george=function(){
    // console.log(`${this.username} is present in all object`);    
    console.log(`George is present in all object`);    
}

Array.prototype.marge=function(){
    console.log(`Marge says hello`);    
}


// **************** from object

// myObj.george()
// myArr.george()

// *************from array

// myObj.marge()
// myArr.marge()


/*********Inheritance******************/

const User={
    name:"George",
    email:"abc@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUserName="ChaiAurCode        "
String.prototype.trueLength=function(){
    console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);    
}

// anotherUserName.trueLength()
// "George".trueLength()
// "Marke".trueLength()

function setUserName(username){
    //complex DB calls
    this.username=username
    console.log("called");    
}

function createUser(username, email, password){
    //setUserName(username)
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

const person=new createUser("George","george@gmail.com","123")
console.log(person);
