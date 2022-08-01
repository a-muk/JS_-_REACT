//getters and setters

//get property
const person={
    fname:"attreyee",
    lname:"mukherjee",
    age:19,
    get sentence(){  //sentence property is used to do some task. 
        return this.fname + this.lname + "is a girl" +"of " +this.age;
    }

};
console.log(person.sentence);


//set property
const person1={
    fname:"attreyee",
    lname:"mukherjee",
    age:0,
    set agefinal(age){  //sentence property is used to do some task. 
        this.age=age;
    }

};
person1.age=19;
console.log(person1.age);
