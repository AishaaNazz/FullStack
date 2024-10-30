
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
