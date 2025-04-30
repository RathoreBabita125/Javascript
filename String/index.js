const name="Stefen"
const age=25
console.log(`Hi there, ${name} here and my age is ${age}`);

/*********Another way to declare string************/
const newName=new String('Mike');
console.log(newName);
// console.log(newName[1]);

// console.log(newName.__proto__);
// console.log(typeof newName.__proto__);

// console.log(newName.length);   // to find total lengh of the string

const inUpperCase=newName.toUpperCase();
// console.log(inUpperCase);       // to change all string to uppercase

// console.log(newName.charAt(2));      // to find character at spefic index

// console.log(newName.indexOf('e'));


//***********************Substring of the string***************************/
const userName="Caroline Forbe"

// console.log(userName.substring(0,5));
// console.log(userName);


const anotherUser=userName.slice(-8,4);  // slice for reverse string
// console.log(anotherUser);


/*****************Use Of Trim (trim is use to remove all extra spaces)***************/
const newUser="       damon"
// console.log(newUser);
console.log(newUser.trim());


/***********Replace*********** */
// const url="https:www.youtube.com"
// console.log(url.replace('.','%'));
// console.log(url.replaceAll('.','%'));
// console.log(url.includes('youtube'));



//******************use of split******************* */
const homeTown="Mystic-Falls"
console.log(homeTown.split('-'));
















