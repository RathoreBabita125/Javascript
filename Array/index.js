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

// console.log(myArray);
// console.log(myArray.splice(1,2));
// console.log(myArray);



/*********************Array**********/
const vampireTeam1=["Elena","Damon","Stefen","Jeremy"]
const vampireTeam2=["Caroline","Klaus","Rebekah","Eliajah"]

// vampireTeam1.push(vampireTeam2);
// console.log(vampireTeam1);  // it will array into array

// But we want both array merged, then we will use concat and store in new array
// const vampireTeam=vampireTeam1.concat(vampireTeam2)
// console.log(vampireTeam);

/**********Another Way************/
const vampireTeam=[...vampireTeam1,...vampireTeam2]
console.log(vampireTeam);

// when we want all arrays element store in single array, then we use flat 
// (flat takes an argument to tell depth )  
// Creates a new array with the sub-array elements concatenated:

const NumArray=[1,2,3,[4,5,6],7,8,[9,10,[11,12,13,14],15]]
const singleArr=NumArray.flat(Infinity)
console.log(singleArr);


// Other methods of array

console.log(Array.from("Caroline"));
console.log(Array.isArray("Caroline"));
console.log(Array.of("Caroline"));
console.log(Array.from({name:"Caroline"}));  //??????????????



const user1="Mike"
const user2="Harvey"
const user3="George"
console.log(Array.of(user1,user2,user3));
















