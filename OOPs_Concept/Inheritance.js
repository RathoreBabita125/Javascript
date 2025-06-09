class User{
    constructor(username){
        this.username=username
    } 
    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addAssignment(){
        console.log(`Assignment is given by ${this.username}`);        
    }
}

class Student extends Teacher{
    constructor(username, email, password, studentName, rollNum){
        super(username)
        this.email=email
        this.password=password
        this.studentName=studentName
        this.rollNum=rollNum
    }
    giveExam(){
        console.log(`${this.studentName} has completed exam which has been given by ${this.username}`);    
    }
}

const student=new Student("Promode","abc@gmail.com","12345","George",50)
// console.log(student.giveExam());
student.giveExam()
student.addAssignment()
student.logMe()

const teacher=new Teacher("promod","pr@gmail.com","123")
// teacher.addAssignment()
// teacher.logMe()

console.log(teacher===student);
console.log(teacher instanceof Teacher);
console.log(student instanceof Student);
console.log(student instanceof Teacher);
console.log(teacher instanceof Student);
console.log(teacher instanceof User);
console.log(student instanceof User);

