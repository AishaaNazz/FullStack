// console.log("welcome to node.js");
// for(let i=1;i<=5;i++){
//     console.log("i value is " +i);
    
// }
// console.log("welcome!back");



// // os module
// const { request } = require('http');
// const os=require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(__dirname);
// console.log(__filename);



// // path module
// const path=require('path')
// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));


//file module
// const fs=require('fs');

// fs.readFile('one.html','utf8',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })


//write file method

// const fs=require('fs')
// let content="welcome to writeFile method in nodejs"
// fs.writeFile('two.txt',content,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("check once the file added or not")
// })


// const fs=require('fs')
// fs.rename("two.txt","three.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Renamed successfully")
// })


// let res=require('./test1')
// console.log("The result is="+(res(10,20)));


let {add,sub,mul}=require('./test1')
console.log("Addition is="+(add(10,20)));
console.log("Subtraction is="+(sub(20,10)));
console.log("multiplication is="+(mul(20,10)));


