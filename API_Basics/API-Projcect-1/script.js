const button=document.querySelector('button')

const randomURL='https://randomuser.me/api/'
// console.log(randomURL);

const xhr=new XMLHttpRequest();
xhr.open('GET',randomURL);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);    
}
xhr.send()


// button.addEventListener('click',function(e){
//     // document.appendChild( document.innerHTML=`<div class="text">Shows followers</div>`)
//     const text=document.createElement('div')
//     text.innerHTML="Himanshu Khadush"
//     document.body.append(text)
    

// })