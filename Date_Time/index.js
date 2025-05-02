/************Date************* */

let mydate=new Date();

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString('en-IN'));
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


// let newDate=new Date(2025,4,2);
// console.log(newDate.toDateString());

/********argument for date as well time*************/

// let newDate=new Date(2025,4,2,5,3);
// console.log(newDate.toLocaleString());


let newDate=new Date("02-05-2025");
// console.log(newDate.toLocaleString());


/***************Time*********************/
let currentTime=Date.now()
// console.log(currentTime);
// console.log(newDate.getTime());


/***********months start from zero here******* */
const myNewDate=new Date();
// console.log(myNewDate.getMonth());
// console.log(myNewDate.getDate());
// console.log(myNewDate.getFullYear());
// console.log(myNewDate.getDay());
// console.log(myNewDate.getHours());
// console.log(myNewDate.getMinutes());
// console.log(myNewDate.getSeconds());
// console.log(myNewDate.getMilliseconds());
// console.log(myNewDate.getTime());

console.log(myNewDate.toLocaleString('default',{

    weekday:"long"

}));       //Friday

console.log(myNewDate.toLocaleString('default',{

    weekday:"short"

}));    // Fri
















