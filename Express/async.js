
//async 
async function test(){
    x=20+50;
    console.log("inside of the function");
    return x;
}
let result= test();
result.then((data)=>{
    console.log(`result is ${data}`);
    
})
