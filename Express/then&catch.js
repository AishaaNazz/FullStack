
//async with then & catch
async function test(){
    x=20+50;
    console.log("inside of the function");
    return x;
}
let result1= test();
result1.then((data)=>{
    console.log(`result1 is ${data}`);
    
})
result1.catch((error)=>{
    console.log(error);
    
})