// const userEmail="mike@axw.com"
// if(userEmail){
//     console.log("Got user email ID");    
// }
// else{
//     console.log("Don't Have User email ID");  
// }  
//output- Got user email ID



// const userEmail=""
// if(userEmail){
//     console.log("Got user email ID");    
// }
// else{
//     console.log("Don't Have User email ID");  
// }  
// Output-Don't Have User email ID



// const userEmail=[]
// if(userEmail){
//     console.log("Got user email ID");    
// }
// else{
//     console.log("Don't Have User email ID");  
// } 
//Output Got user email ID



//----------------******Falsy Values*******----------------------/
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/*-----------------****Truthy values******----------------- */
//"0", 'false', " ", [], {}, function(){}


// const arr=[]
// if(arr.length==0){
//     console.log("Empty Array");    
// }

const myobject={}
if(Object.keys(myobject).length===0){
    // console.log("Empty object");    
}


/***-------------Nullish Coalescing operator (??) null undefined----------*/
let val;

// val=10??20
// console.log(val); // 10

// val=null??20
// console.log(val); // 20

// val=undefined??20
// console.log(val); // 20

// val=null??100??20
// console.log(val); // 100

// val=null??undefined??50??20
// console.log(val); // 50



/**********Terniary Operator*********************/
//condition ? true : false

const price=50
price<=50 ? console.log("greater than 50"):console.log("less than 50");



