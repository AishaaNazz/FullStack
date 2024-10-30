

const http=require('http')
const PORT=5566;
const myServer=http.createServer((request,response)=>{
response.write("welcome to NodeJs program");
response.write("Hi i am nodeJS responding you")
response.end();
})
myServer.listen(PORT,()=>{
    console.log(`My server is running on PORT ${PORT} number`);
})