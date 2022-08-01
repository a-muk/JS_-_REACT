// const person={
//     fname:"attreyee",
//     lname:"mukherjee",
//     age:25,

// };
//In java we put the constructors inside a class becoz JVM only understand classes 
function Person(){
    this.fname=first;
    this.lname=last;
    this.name= function(){
        return this.fname+this.lname;
    }
}

const p1=new Person("A","B");
const p2=new Person("C","D");
console.log(p1.name());