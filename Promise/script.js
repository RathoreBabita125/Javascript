//-----------------------First----------------------
const promiseOne=new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');        
        resolve()
    },1000)
})
// how to consume promise
// relation*************then---resolve
promiseOne.then(function(){
    console.log("Promise consumed");    
})


//-----------------------Second----------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('promise task-2');
        resolve()
    },1000)
}).then(function(){
    console.log('consumed-2');    
})


//-----------------------Third----------------------
const promiseThird=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Mike",email:"mike@mikelson.com"})
    },1000)
})
promiseThird.then(function(user){
    console.log(user);    
})


//-----------------------Four----------------------
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(error){
            resolve({username:"John", email:"john@mikelson.com"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);  
    return user.username
})
.then(function(username){
    console.log(username);    
})
.catch(function(error){
    console.log(error);   
})


/******************--------*******---------*********************/
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(error){
            resolve({username:"Javascript", email:"js@gmail.com"})
        }
        else{
            reject('Error: 404')
        }
    },1000)
})

async function consumePromiseFive(){
   try{
        const response=await promiseFive
        console.log(response); 
   }   
   catch(error){
        console.log(error);    
   }    
}
consumePromiseFive()


/***************************************/
async function getAllUsers(){
    try {
        const response=await fetch('https://randomuser.me/api/')
        const data=await response.json()
        console.log(data);        
    } catch (error) {
        console.log('E:',error);        
    }    
}
getAllUsers()


/***************************************************/
fetch('https://randomuser.me/api/')
.then(function(response){
    return response
})
.then(function(data){
    console.log(data);    
})
.catch(function(error){
    console.log(error);    
})