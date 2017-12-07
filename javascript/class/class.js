/**
 * Created by admin on 2017/12/3.
 */
class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    getName(){
        console.log(this.name);
    };
    static getName(){
        console.log(this.age);
    }
};
let p = new People('11',12);
// p.getName();
// People.getName.call(p);

class Student extends People {
    constructor(name){
        super(name);
    };
};
let a = new Student('11');
a.getName();
