//Student class
class Student{
    constructor(sName, sId){
        this.name = sName;
        this.id = sId;
        this.school = "Shailkupa Pilot High School";
    }

}

//New objects from Student class
const student1 = new Student("Ashiouzzaman", 01);
const student2 = new Student("Real", 07);
console.log(student1, student2);
