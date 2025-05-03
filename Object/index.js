// Singleton 
//Constructor **********Object.create


//Object Literals
/***************Symbol************* */

let mySymbol=Symbol("Honesty")
const userDetails={
    name:"Mike",
    "full Name":"Mike Jeopard",
    profession:"Lawyer",
    age:24,
    department:"Law",
    location:"America",
    email:"mike@harward.com",
    [mySymbol]:"Trustworthy"
}

// console.log(userDetails);
// console.log(userDetails.email);

//**********OR******************/
// console.log(userDetails.full Name);       // Wrong way

// console.log(userDetails["full Name"]);    // correct

// console.log(userDetails["email"]);
// console.log( typeof userDetails.mySymbol);
// console.log( typeof userDetails[mySymbol]);

// *****************If we want nochanges in object, then we simply we use freeze keyword************
userDetails.location="Gurugram"
// console.log(userDetails);
// Object.freeze(userDetails)

userDetails.location="London"
// console.log(userDetails);


/**********fuunction**************************/
userDetails.greeting=function(){
    // console.log("Hi, there how're you?");   
}
// console.log(userDetails.greeting()); //Note: first need to remove freeze (if want modification)

userDetails.greetingTwo=function(){
    // console.log(`Hi, ${this.name}, How are you`);   
}
// console.log(userDetails.greetingTwo());


/*************Singleton Object **************/
/**************Initialization of Object*****************/
// const instaUser=new Object()

/************OR**************/

const instaUser={}
instaUser.id=152
instaUser.userName="Mike"
instaUser.status=false

// console.log(instaUser);

/************If We want only key then we use keys method with object */
// console.log(Object.keys(instaUser));

/***********If We want only value then we use values method with object */
// console.log(Object.values(instaUser));

/***********Entries function give key value pair as an array***********/
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('userName'));



/************Nesting (object inside object)**************/
const allInstaUser={
    email:"insta@gmail.com",
    userOne:{
        fullName:{
            firstName:"Mike",
            lastName:"Mikelson"
        }

    }
}

// console.log(allInstaUser.userOne.fullName.lastName);



/**************Multiple Object****************/
const obj1={
    a:10,
    b:20
}

const obj2={
    c:30,
    d:40
}

const obj3={
    e:50,
    f:60
}

/***********First way **************/
// const obj=Object.assign({},obj1,obj2,obj3)
// console.log(obj);

/**********Second way******************/
// const obj={obj1,obj2,obj3}
const obj={...obj1,...obj2,...obj3}
// console.log(obj);

/**************************************/

const allUsers=[
    {
        name:"Elena",
        id:1556
    },
    {
        name:"Bonnie",
        id:4569
    },
    {
        name:"Caroline",
        id:258
    },
    {
        name:"Matte",
        id:5894
    }
]

// console.log(allUsers);

// console.log(allUsers[1].name);



/************** Object Destructure And JSON API*************/
const course={
    courseName:"Web Development",
    courseInstructor:"JP Jeopard",
    courseBatch:2023
}

// console.log(course);
// console.log(course.courseInstructor);

// object destructure
const {courseInstructor:instructor}=course
console.log(instructor);













