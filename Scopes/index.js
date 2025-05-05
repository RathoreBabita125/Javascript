/******************Scope*******************/

// var num1=10
// let num2=20
// const num3=30

// console.log(num1);
// console.log(num2);
// console.log(num3);

/**********Variable Scope*************/

var num1=50

if(true){
    var num1=10
    let num2=20
    const num3=30
}
// console.log(num1);   // output:10
// console.log(num2);   // Error: num2 is not defined
// console.log(num3);   // Error: num3 is not defined

let num2=100
if(true){
    let num2=20
    const num3=30
    // console.log("Inner Num2:", num2);   
}
// console.log(num2);


/**********Function inside function*************/

function one(){
    let username="Mike"
    function two(){
        let email="mike@abc.com"
        console.log(`Name of the user is ${username} and email id:${email}`);    
    }
    // console.log(email);
    // two()
    
}
one()



/*********************************/


// console.log(addNum(10));   // 11
function addNum(num){
    return num+1;
}
// addNum(10)  // it return value 11
// console.log(addNum(10));



// console.log(addNum2(5));  //Cannot access 'addNum2' before initialization
const addNum2=function(num){
    return num*num
}
// addNum2(5)  // it will return 25 values
// console.log(addNum2(5));


// console.log(addNum3(10));  //Cannot access 'addNum3' before initialization
let addNum3=function(num){
    return num/2
}
// addNum3(5)  // it will return 25 values
// console.log(addNum3(10));



/****************************Arrow Function***********************/
// function addTwoDigit(digit1, digit2){
//     return digit1+digit2
// }
// console.log(addTwoDigit(10,20));


// const addTwoDigit=function(digit1, digit2){
//     return digit1+digit2
// }
// console.log(addTwoDigit(40,20));


/***********Arrow Function (explicit return)*****************/
// const addTwoDigit=(digit1, digit2)=>{
//     return digit1+digit2
// }
// console.log(addTwoDigit(40,100));


/***********************OR  (implicit return arrow function)********************/
// const addTwoDigit=(digit1, digit2)=>digit1+digit2
// console.log(addTwoDigit(140,100));


/**************OR******************** */
// const addTwoDigit=(digit1, digit2)=>(digit1+digit2)
// console.log(addTwoDigit(10,100));



/****************This Keyword**************/

const employeesDetail={
    username:"Mike",
    id:1223565,
    emailID:"mike@abc.com",

    greeting:function(){
        //this refers to current context
        console.log(`${this.username}, Welcome to this organization`);
        // console.log(this);
        
       
    }
}
// employeesDetail.greeting()
// employeesDetail.username="George"
// employeesDetail.greeting()
// console.log(this);


//+++++++++++++++++++Arrow Function+++++++++++++

/************this keywords works in object but does not work in function******** */
// function sleep(){
//     let routine="workout"
//     console.log(this.routine);   
//     // console.log(this);   
// }
// sleep()   //undefine

// const sleep=function(){
//     let routine="workout"
//     console.log(this.routine);   
// }
// sleep()  //undefine

const sleep=()=>{
    let routine="workout"
    console.log(this.routine);   
}
sleep()  //undefine









