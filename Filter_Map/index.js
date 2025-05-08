
/****************filter**********************/

const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    // console.log(item);
    // return item
} )
// console.log(values);


/********************Filter**********************/
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num*10)
    }
} )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
 })

//   console.log(userBooks);


/************map************************* */

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNum = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNum);

/*********************Reduce****************************/

const myitem=[100,200,300,400,500]

// const totalItem=myitem.reduce(function(acc,item){ 
//   return acc+item; 
// },0)
// console.log(totalItem);

const totalItem=myitem.reduce((acc,item)=>acc+item,0)
console.log(totalItem);


const myCourse=[
  {
    couseName:"java course",
    price:599
  },
  {
    couseName:"Python course",
    price:399
  },
  {
    couseName:"javascript course",
    price:1599
  },
  {
    couseName:"fullstack course",
    price:12599
  }

]

// const totalPrice=myCourse.reduce(function (acc, item){
//   return acc+item.price
// },0
// )
// console.log(totalPrice);


/* Calls the specified callback function for all the elements in an array.
   The return value of the callback function is the accumulated result,
   and is provided as an argument in the next call to the callback function.

  callbackfn — A function that accepts up to four arguments. 
  The reduce method calls the callbackfn function one time for 
  each element in the array.*/


const totalPrice=myCourse.reduce((acc, item)=> acc+item.price, 0)
console.log(totalPrice);


