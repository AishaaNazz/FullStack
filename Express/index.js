// const express=require('express')
// const app=express();

// const PORT=6677;

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`);
// });


// const express=require('express')
// const app=express();

// const PORT=6677;

// app.get("/user",(req,res)=>{
//     return res.json("This is Read or get method")
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`);
// })


// const express=require('express')
// const app=express();

// const PORT=6677;

// app.get("/user",(req,res)=>{
//     return res.json("This is Read or get method")
// })
// app.get("/user1",(req,res)=>{
//     return res.json("This is user1 end point with get method");
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`);
// })


// const express=require('express')
// const app=express();

// const PORT=6677;

// app.get("/user",(req,res)=>{
//     return res.json("This is Read or get method")
// })
// app.get("/user1",(req,res)=>{
//     return res.json("This is user1 end point with get method");
// })
// app.post("/post",(req,res)=>{
//     return res.json("This is Post method")
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`);
// })



// const express=require('express')
// const app=express();

// const PORT=6677;

// app.get("/user",(req,res)=>{
//     return res.json("This is Read or get method")
// })
// app.get("/user1",(req,res)=>{
//     return res.json("This is user1 end point with get method");
// })
// app.post("/post",(req,res)=>{
//     return res.json("This is Post or create method")
// })
// app.put("/put",(req,res)=>{
//     return res.json("this is put or update method")
// })

// app.delete("/delete",(req,res)=>{
//     return res.json("this is delete method")
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`);
// })




//setTimeout
console.log("first statement");
const display =()=>{
    let sum=0;
    for(let i=1;i<=1000000;i++){
        sum=sum+i;
    }
    setTimeout(()=>{
        console.log(`sum of i value is = ${sum}`);},2000)
  
}
display();
console.log("second statement");




//callback function
function greet(name , callback){
    console.log(name);
    callback();
    
}
function welcome(){
    console.log("this is an example program on callback function");
    
}
greet("ayesha",welcome)



//
function test(){
    x=10+20;
    console.log("inside of the function");
    return x;
    
}
let res=test();
console.log(`result is = ${res}`);


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
