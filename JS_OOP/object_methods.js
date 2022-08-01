
const person={
    fname:"attreyee",
    lname:"mukherjee",
    age:19,
    sentence: function(){
        return this.fname + this.lname + "is a girl" +"of " +this.age;
    }

};

console.log(person.sentence());