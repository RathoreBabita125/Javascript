const boxs=document.querySelectorAll('.box');
const body=document.querySelector('body')

// console.log(box);

boxs.forEach(function(box){

    /*     *     */
    
    // console.log(box);

    box.addEventListener('click', function(e){
        // console.log(e);
        if(e.target.id==="red"){
            body.style.backgroundColor="red"
        }
        if(e.target.id==="white"){
            body.style.backgroundColor="white"
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor="purple"
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor="yellow"
        }
        if(e.target.id==="green"){
            body.style.backgroundColor="green"
        }               
    })    
})




