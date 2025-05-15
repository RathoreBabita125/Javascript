// ***********there may be problem to access more information so use eventlistner****************

// document.getElementById('pic-1').onclick=function(){
//     alert("image-1 is clicked")
// }

//attachEvent()

/*******Event Object**************** */
//type
//timestamp
//defaultPrevent
//target
//toElement
//srcElement
//currentTarget
//clientX
// screenX
// screenY
// shiftkey
// ctrlkey
// keyCode

/* third parameter(false)  */

/*************************Bubbling Format********************/


document.getElementById('pic-1').addEventListener('click', function(){
    alert("image-1 is clicked again")
},false)


document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("clicked google")

},false)


document.getElementById('images').addEventListener('click', function(e){
    alert("all images are clicked")
    console.log(e.target.parentNode); 
    const pickImage=e.target.parentNode
    // pickImage.remove()
},false)




