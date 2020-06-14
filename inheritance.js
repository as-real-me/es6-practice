class Parent{
    constructor(father, mother){
        this.fatherName = "Ashiouzzaman";
        this.motherName = "Sokina Begum";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    //function inside class
    fullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Rafin");
const baby2 = new Child("Rayan");
console.log(baby.fullName(), baby2.fullName());


//Learning here
// - How inherit from other class
// - how to use function(method) inside a class