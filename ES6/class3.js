class Student{
    id=1001;
    name="Srujan Kumar";
    showDetails(){
        console.log(this.id+" "+this.name)
    }
   }
let s=new Student();
s.showDetails();