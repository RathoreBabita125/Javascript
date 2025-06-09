class User{
    constructor(username){
        this.username=username
    }
    static signedUP(){
        console.log(`${this.username} has been successfully signed up`);    
    }
}

const user1=new User("Rathi")
// user1.signedUP()

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
    addCourse(){
        console.log(`Courses are added successfully by ${this.username}`);    
    }

}

const teacher=new Teacher("George","gr@gmail.com")
// teacher.signedUP()
teacher.addCourse()