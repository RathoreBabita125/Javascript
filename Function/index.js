// console.log("hello");
// console.log("hello1");
// console.log("hello2");
// console.log("hello3");
// console.log("hello4");
// console.log("hello5");

function greeting(){
    console.log("hello");
    console.log("hello1");
    console.log("hello2");
    console.log("hello3");
    console.log("hello4");
    console.log("hello5");
}
// greeting();
// greeting();

function addTwoNumber(num1, num2){  //parameters (when we pass only variable in function, that is parameters)
    num3=num1+num2
    console.log(num3); 
}
// addTwoNumber(10,20) //arguments (when we pass value in funtion, that is arguments)
// addTwoNumber(10,"20")
// addTwoNumber(null,20)

function findResult(number1, number2, number3){
    result=number1+number2+number3;
    // console.log(result);
    console.log("Total result is:", result); 
    return result
    // console.log("Total result is:", result); 
}
// findResult(10,20,30)
// console.log(findResult(10,20,30));


function userDetails(username="John"){
    if(!username){ //(username===undefined)
        console.log(`${username}, just passout`);
        return      
    }
    return `${username}, signedout`;
}

// console.log(userDetails("Mike"));


function calDetails(val1,val2,...val){
    return val;
}
// console.log(calDetails(100,200,300,400));


const user={
    userName:"George",
    email:"george@abc.com"
}

function findDetails(checkUser){
    console.log(`${checkUser.userName} is the reliable for job and his email address is ${checkUser.emails}`);
}
// findDetails(user);


const arr=[100,200,300,400,500]
console.log(arr.length);



function checkArray(tempArray, idx, target){
    while(idx<=tempArray.length){
        if(tempArray[idx]==target){
            return true;
        }
        idx++
    }
    return false;
}

console.log(checkArray(arr,0,400));


 