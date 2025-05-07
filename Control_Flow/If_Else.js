/*--------------------If-Else condition--------------------- */


// let isLogged=true
// if(isLogged){
//     console.log("the user is already logged in");  
// }



// const val=20
// if(val>10){
//     console.log("value greater than 10"); 
// }
// if(val == 20){
//     console.log("value is equal to 20"); 
// }
// else{
//     console.log("value greater than 20"); 
// }



/*------------------Nesting if else condition--------------*/

// const val =20
// if(val>10){
//     console.log("value greater than 10"); 
// }
// else if(val == 20){
//     console.log("value is equal to 20"); 
// }
// else{
//     console.log("value greater than 20"); 
// }


//  ******************implicit scope*****************
const balance=1000
// if(balance<2000) console.log("test");


// const isEmpty=true
// const isStringVal=true
// if(isEmpty && isStringVal){
//     console.log("Both statement are true");  
// }


// const isEmpty=true
// const isStringVal=false
// if(isEmpty && isStringVal){
//     console.log("Both statement are true");  
// }
// else{
//     console.log("Both statement are not true");  
// }


const isEmpty=true
const isStringVal=false
if(isEmpty || isStringVal){
    console.log("Both statement are true");  
}
else{
    console.log("Both statement are not true");  
}

