// JS for in loop
const person={
    fname:"attreyee",
    lname:"mukherjee",
    age:25,

};
for (let x in person){
    console.log(person[x]);

}

//adding new properties
person.nationality="Indian";
for (let x in person){
    console.log(person[x]);

}

//deleting properties
delete person.age;
for (let x in person){
    console.log(person[x]);

}

//nested objects
const person2={
    fname:"attreyee",
    lname:"mukherjee",
    interests:{
        interest1: "Coding",
        interest2: "Reading", 
        interest2: "Dancing",
    },
    age:25,

};

console.log(person2.interests.interest1);

//nested arrays and objects 
const person3={
    fname:"attreyee",
    lname:"mukherjee",
    hobbies:[
        {type:"coding" , domain:["web development","devops", "machine learning"]},
        {type:"reading books" , domain:["history","literature", "spirituality"]},
        {type:"dancing" , domain:["bharatnatyam","odissi"]},
        
    ],
    age:25,

};

for ( let i in person3.hobbies){
    for (let j in person3.hobbies[i].domain){
        console.log(person3.hobbies[i].type , "-->", person3.hobbies[i].domain[j])
    }
}


//