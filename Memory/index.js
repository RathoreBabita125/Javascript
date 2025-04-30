//****************************Memory********************* */
// 1.Stack Memory
// **************all primitive datatype are stored in stack memory 
// (it takes copy of orginal value if changes)
//    if modification occurs then only copied values will change but orginal remains same**************************

let firstName="John"
let college="JM University"
let secondName=firstName
secondName="Mike"
// console.log(firstName);   //John
// console.log(secondName);   //Mike
// console.log(college);




// 2.Heap Memory
// *******************all non primitive datatypes or reference are stored in heap memory
//                    (It takes reference from orginal value if modification takes values also change)
//            if modification occurs then orginal value also changes********************


let user1={
    name:"Elena",
    town:"Mystic Fall",
    age:20
}

let user2=user1;
user2.name="Stefen"

console.log(user1.name);  //Stefen
console.log(user2.name);  //Stefen






