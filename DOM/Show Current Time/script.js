const timer=document.getElementById('timer')


setInterval(function(){
    let date=new Date();
    timer.innerHTML=date.toLocaleTimeString()
    // console.log(date.toLocaleTimeString());
    

},1000)


