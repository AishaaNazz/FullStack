

async function display(){
    let a=10+20 ;
    return a;
    
}
let result = display();
result.then((data)=>{
    console.log("the result is =" +data);
    
})