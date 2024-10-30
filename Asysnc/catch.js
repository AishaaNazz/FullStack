async function displayInfo()
{
    let x=20,y=10;
    if(x<y){
        return "y value is biggest";
    }
    else
    {
        throw new Error;
    }    
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
result.catch((data)=>{
    console.log(data);
})