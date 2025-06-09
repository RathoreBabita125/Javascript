// let math_pi=Math.PI
// math_pi=5
// console.log(math_pi);

// console.log(Math.PI);
// Math.PI=10 // not changable
// console.log(Math.PI);

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI",{
    writable:true,
    enumerable:true // not changable
})
// console.log(descriptor);

// object declare
// Object.create(null)
// const myObj=Object.create(null)

const user={
    name:"George",
    roll_no:123,
    isStudent:true,
    IsSignUP:function(){
        console.log("Not Signed Successfully");
        
    }
}
// console.log(user);

Object.defineProperty(user,'name',{
    // writable:false,
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(user, "name"));


for (let [key, value] of Object.entries(user)) {
    if(typeof value!= 'function'){
        console.log(`${key} : ${value}`);     
    }
}



