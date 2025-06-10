function outer(){
    let username="George"
    // console.log("OUTER", person);
    function innerOne(){
        let person="abc"
        console.log("innerOne", username);        
    }
    function innerTwo(){
        console.log("innerTwo",username);
        // console.log(person);                
    }
    innerOne()
    innerTwo()    
}
outer()