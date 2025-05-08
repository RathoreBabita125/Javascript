/********************For Loop*******************/

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);    
}


//*************Break and Continue****************/
for (let index = 1; index <= 10; index++) {
    if(index==5){
        // console.log("detected");
        break
    }
    // console.log(index);  
    
}

for (let index = 1; index <= 10; index++) {
    if(index==5){
        // console.log("detected");
        continue
    }
    // console.log(index);  
    
}


/***************While Loop and Do-While Loop*******************/
let val=0;
while (val<=20) {
    // console.log(val);
    val=val+2;   
}

// let score=1
// do{
//     console.log(score);
//     score++
// }while(score<=10) // output:1 2 3 4 5 6 7 8 9 10


let score=11
do{
    // console.log(score);
    score++
}while(score<=10)   //output:11



/*****************For of Loop (basically uses in array or array specific loop)*******************/
// const arr=[]
// const arr1=[{},{},{}]


const arr=[10,20,30,40,50]
for (const num of arr) {
    // console.log(num);  
}


/*********for of loop (in string) *********/
const str="Hello World"
for (const ch of str) {
    // console.log(`Each char of str : ${ch}`);
}

/***************Map (map stores only unique value : map is not itarable)************ */
const map=new Map()
map.set("IN","India")
map.set("UK","United Kingdom")
map.set("FR","France")
map.set("USA","United States of America")
map.set("IN","India")
// console.log(map);

// for (const key of map) {
//     console.log(key);   
// }

for (const [key,value] of map) {
    // console.log(`${key}::=> ${value}`);   
}

/*******for of loop does not work in object (It's non-iterable)  */
// const myObject={
//     jv:"Java",
//     py:"Python",
//     cpp:"C++",
//     oop:"Object Oriented Programming"
// }
// for (const key of myObject) {
//     console.log(key);   
// }



/*******Object works by using for-in loop (It's iterable)  */

const myObject={
    jv:"Java",
    py:"Python",
    cpp:"C++",
    oop:"Object Oriented Programming"
}
// if we want only key
for (const key in myObject) {
    // console.log(key);   
}


// if we want both key as well as value
for (const key in myObject) {
    // console.log(key,myObject[key]);   
}

for (const key in myObject) {
    // console.log(`key: ${key} and value:${myObject[key]}`);   
}

/*********for-in loop in array***********/
const newArr=["java","sql","c++","python"]
for (const key in newArr) {
//    console.log(key); // it will give index like-0 1 2 3 
}

for (const key in newArr) {
    // console.log(newArr[key]); // it will give value of array like-0 1 2 3 
}



/***************foreach Loop***************/

// array.forEach(element => {
    
// });

const programming=["java","c++","HTML","Python","c Sharp"]

// programming.forEach(function (item){
//     console.log(item);    
// })

/************OR***************/

// programming.forEach((item)=>{
//     console.log(item);   
// })

/************OR***************/

// programming.forEach((item, idx, arr)=>{
//     console.log(item,idx,arr);   
// })

/************OR***************/

function arrElement(item){
    console.log(item);
}
// programming.forEach(arrElement)




/************************************ */
const coding=[
    {
        Programming:"java",
        fileName:"java"
    },
    {
        Programming:"Python",
        fileName:"py"
    },
    {
        Programming:"javascript",
        fileName:"JS"
    }
]

// coding.forEach(function(item){
//     console.log(item);
    
// })

coding.forEach(function(item){
    // console.log(item);  // will give complete array item   
})


coding.forEach(function(item){
    console.log(item.fileName);  // will give array object value  
})

