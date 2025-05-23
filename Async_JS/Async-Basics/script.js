
/*********************setTimeout Function****************/


// setTimeout(function(){
//     console.log("babita");
    
// },1000)

// setTimeout(function(){
//     for (let i = 0; i < 10; i++) {
//         console.log("Hi, Babita",i);      
//     }
// },8000)



// const changeText=function(){
//     document.querySelector('h1').innerHTML="Best Learning to Practice Daily"
// }
// const changeTXT=setTimeout(changeText,2000)

// document.getElementById('button').addEventListener('click',function(){
//     clearTimeout(changeTXT)
// })




/*********************setInterval Function****************/


// setInterval(function(){
//     console.log("babita");
    
// },1000)


// setInterval(function(){
//     for (let i = 0; i < 10; i++) {
//         console.log("Hi, Babita",i);      
//     }
// },8000)

// setInterval(function(){
//     console.log("Hi, Babita");      
// },1000)

// setInterval(function(){
//     console.log("Hi, Babita");      
// },3000)

// setInterval(function(){
//     console.log("Hi, Babita");      
// },5000)

// setInterval(function(){
//     console.log("Hi, Babita");      
// },7000)



const changeText=function(){   
    document.querySelector('h1').innerHTML="Best Learning to Practice Daily"
}

/*************start**************/

const start=document.getElementById('start')
start.addEventListener('click',function(){
    setInterval(changeText,2000)
})

/*********stop************/

const stop=document.getElementById('stop')
stop.addEventListener('click',function(){
    // document.querySelector('h1').innerHTML="Async Javascript"
    // const changeTXT=setTimeout(changeText,2000)
    clearInterval(setTimeout(changeText,2000))
    setInterval(function(){
        document.querySelector('h1').innerHTML="Async Javascript"
    },2000)

})



