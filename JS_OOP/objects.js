
const circle ={ //the object
    radius:1, //the properties 
    location:{ //location here can become an object
        x:1, //sub properties
        y:1
    },
    draw: function(){ //function stored as a property - called a method 
        console.log('draw');
    }
};
circle.draw(); //calling the draw() property of circle object 


//factory function -One way of creating an object

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle2= createCircle(1);
circle.draw();

//constructor function -- Another way of creating an object 
//in js we don't have the concept of classes
function Circle(radius){
    console.log('this',this);
    this.radius=radius; //this here refers to the global object 
    //if you are running the code inside a browser, the global object is the window object
    //if you are running it inside a node environment, it is  global global object 
    
    this.draw=function(){
        console.log('draw');
    }
}

const another= new Circle(1); //creating an empty object 
//new operator is used to call a function here. So, when we use it, 3 things happen:
//1)It will create an empty object
//2)It will set 'this' to point to that object
//3)It will return the object 


//Accessing JS properties- 

//objectname["property "] can also be used 
//like-

console.log(circle["radius"]);

