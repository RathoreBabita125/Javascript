/*******************Math and Number***********************/
const number=100
console.log(number);

// console.log(typeof number.toString());

const newNumber=new Number(400)
console.log(newNumber);

/************toFixed**************/
const newNumber1=500.4900
console.log(newNumber1.toFixed(2));  // 500.49


/*******************toPricision *************/
console.log(newNumber1.toPrecision(4)); // 500.5


// *******************LocalString********************
const uniqueNum=150000000
console.log(uniqueNum.toLocaleString()); // 150,000,000
console.log(uniqueNum.toLocaleString('en-IN')); // 15,00,00,000 (indian count)



// console.log(typeof newNumber.toString());



//          MATH

// console.log(Math.abs(-4));
// console.log(Math.random());
console.log(Math.round(4.89));
console.log(Math.ceil(4.89));       //***It will always take upper value  */
console.log(Math.floor(4.89));     //***It will always take lower  value  */

// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));


/************MAX**************/
console.log(Math.min(1,5,7,40));
console.log(Math.max(1,5,7,40));


//******find random between min and max*************/
const minVal=20
const maxVal=40
console.log(Math.floor(Math.random()*(maxVal-minVal+1)+minVal));






