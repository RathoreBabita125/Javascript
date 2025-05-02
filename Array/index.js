const arr=[10,20,30,40,50,60,"Hi",true]
// console.log(arr);


/*****************we can access any value from the array by using index**************/
// console.log(arr[3]);
// console.log(arr.includes(50));
// console.log(arr.indexOf(30));


/************Join***************/

// const newArr=arr.join()
// console.log(newArr); // give string
// console.log(typeof arr);  //object
// console.log( typeof newArr);  //string


/**********PUSH (To add item in the end of array)***********/
arr.push(100)
arr.push(50)
// console.log(arr);

/***********POP (To remove item from end of array) in pop method, we don't pass any argument**************/
arr.pop()
// console.log(arr);


/**************UNSHIFT (To add item in the begining of array)**************************/
arr.unshift(-1)
// console.log(arr);

/*************SHIFT (To remove item from begining of array), we don't need to pass any argument *******************/
arr.shift()
arr.shift()
// console.log(arr);


/****************Slice AND Splice***********************/
const myArray=[10,20,30,40,"John","Mike",true,null]

/********Slice********* */
/* The slice() method returns selected elements in an array, as a new array.
   It selects from a given start, up to a (not inclusive) given end.
   It does not change the original array. 
*/

// console.log(myArray);
// console.log(myArray.slice(1,2));
// console.log(myArray);

/*******Splice***************/
/* The splice() method adds and/or removes array elements.
   It overwrites the original array. 
*/

console.log(myArray);
console.log(myArray.splice(1,2));
console.log(myArray);









