class student{
    constructor(){
        this.id=101;
        this.name="Ayesha";

    }
    showDetails(){
        console.log(this.id+" "+this.name);
    }
    displayInfo(){
        console.log("This is displayInfo method")
    }
}
let s= new student();
s.showDetails();
s.displayInfo();