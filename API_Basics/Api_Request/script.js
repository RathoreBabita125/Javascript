/*
    API stands for Application Programming Interface.
    A Web API is an application programming interface for the Web.
    A Browser API can extend the functionality of a web browser.
    A Server API can extend the functionality of a web server.
 */


    /*
        Value	State	Description
            0	UNSENT	Client has been created. open() not called yet.
            1	OPENED	open() has been called.
            2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
            3	LOADING	Downloading; responseText holds partial data.
            4	DONE	The operation is complete.
    */



    const xhr=new XMLHttpRequest()
    const requestURL='https://randomuser.me/api/'
    xhr.open('GET',requestURL)
    // console.log("Hi, There");
    xhr.onreadystatechange=function(){
        console.log(xhr.readyState);
        if(xhr.readyState===4){

            // const data=this.responseText;
            // console.log(typeof data);      //String  

            const data=JSON.parse(this.responseText);
            console.log(typeof data);
            

            console.log(data);            
        
        }
    }
    xhr.send()