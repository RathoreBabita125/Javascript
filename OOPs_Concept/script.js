// Parts of OOP

/*  Object literal

Constructor function
Prototype
Classes
Instances(new, this)

## 4 pillars

Abstraction
Encapsulation
Inheritance
Polymorphism


 */


/************Object literal*************/
const user={
    username:"George",
    loginCount:8,
    signedIn:true,
    
    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`usename:${this.username}`);        
        // console.log(this);        
    }
}
// console.log(user);
// console.log(user.username);
// console.log(this);
// console.log(user.getUserDetails());


// const userDetails=function(username, userCount, isSignedIn){
//     username=username;
//     userCount=userCount;
//     isSignedIn=isSignedIn;
//     return isSignedIn
// }
// const userOne=userDetails("George", 12, true)
// console.log(userOne);


// const userDetails_1=function(username, userCount, isSignedIn){
//     this.username=username;
//     this.userCount=userCount;
//     this.isSignedIn=isSignedIn;
//     return this
// }
// const userOne=userDetails_1("George", 12, true)

// const userTwo=userDetails_1("Markel", 10, false)
// console.log(userOne); // override the value


const userDetails_1=function(username, userCount, isSignedIn){
    this.username=username;
    this.userCount=userCount;
    this.isSignedIn=isSignedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);        
    }

    // return this   // implicity defined
}
const userOne=new userDetails_1("George", 12, true)

const userTwo=new userDetails_1("Markel", 10, false)

console.log(userOne);
// console.log(userTwo);



