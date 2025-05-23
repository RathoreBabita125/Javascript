const start=document.getElementById('start')
const stop=document.getElementById('stop')


const RandomCLR_Code=function(){
    const randomColor='0123456789ABCDEF'
    let colorCode='#'
    for(let i=0;i<6;i++){
        colorCode+=randomColor[Math.floor(Math.random()*16)]
    }
    return colorCode;
};

let IntervalID;
const startColoring=function(){  
    if(IntervalID==null){
        IntervalID=setInterval(colorChange,1000)
    } 
    function colorChange(){
        document.body.style.backgroundColor=RandomCLR_Code()
    }
};

const stopColoring=function(){
    clearInterval(IntervalID)
    IntervalID=null;
};

start.addEventListener('click', startColoring)
stop.addEventListener('click', stopColoring)
