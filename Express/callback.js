

//callback function
function greet(name , callback){
    console.log(name);
    callback();
    
}
function welcome(){
    console.log("this is an example program on callback function");
    
}
greet("ayesha",welcome)
