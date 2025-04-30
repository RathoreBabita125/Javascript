// datatypes
"use strict"  // treat all js code to new version

// alert("hello"); //we are using node js, not browesr


//types to datatype
//**************primitive datatype************** */
// Number -  2 to power 53
// String - ""
// Boolean - true/false
// null - standalone value
// undefined
// BigInt
// Symbol-> Unique

let name="John"
let age=56
let isdefined=false
let val=null
let x;

// console.table([name,age,isdefined,val,x])


//*********************OBJECT************** */
// console.log(typeof(name))  //string
// console.log(typeof(age))    //number
// console.log(typeof(isdefined))  //boolean
// console.log(typeof(val))  //object
// console.log(typeof(x))   //undefined


// ************There are two types of datatypes******************
// ******************Primitive Datatypes (There are 7 primitive datatypes)
// String 
// Number
// BigInt
// Boolean
// null
// undefined
// Symbol

let id=1005
let anotherId=110.2

let str;  //undefined

// console.log(typeof id)
// console.log(typeof anotherId);

let bigNumber=458965329898455198776974145654n
// console.log(typeof bigNumber);

let isprooved=false
// console.log(isprooved);

let num='123'
let anotherNum='123'
// console.log(Symbol(num)===Symbol(anotherId));  //false
// console.log(num);
// console.log(anotherNum);

// console.log(num==anotherNum);    //true
// console.log(typeof num);
// console.log(anotherNum);


// ****************Not Primitive Datatype OR Reference 
// Array
// object
// function

let team=["john", "mike","harvay"]   //Array
console.log(typeof team);


//object
let studentDetails={
    name:"John",
    id:12345,
    section:'A'
}
console.log(typeof studentDetails);

//function as variable
const fun=function(){
    console.log("Hey, there where are you going");   
}
console.log(typeof fun);

