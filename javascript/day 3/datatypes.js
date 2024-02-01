// js data types 

// string , number , bigint,boolian , undefined , null, symbol, object ,.



//number 

let length = 16;
let weight = 4.5;


//string 

let color = 'Yelloow';
let lastName = "raj";


//boolian 
let xo = true;
let y = false;

//object 
const person = {
    firstName: "arun",
    lastName:"raj",
} 

//array object
const cars = ["raj","ar", 56, "bmw"]



//date object 

const date = new Date("2024-03-25")



// types are dynamic 
let x ; 
x = 5;
x = "raj"


// bigInt

 let z = BigInt(" 65464454454554545454545454544545445")
 console.log(z);

//boolian 
 let v = 5;
 let j = 5;
 let c = 6;
 console.log(v==j);


 //object
 
//  var rect = {};

//  rect.width=20;
//  rect.height=10;
//  rect.ar= 56;

//  console.log(rect);


//mutatable 
// var rect = {width:20, height:10};
// console.log(rect);
// rect.width = 30;
// console.log(rect);




// var rect = { width: 20, height: 10 };

// // add new object
// rect.color = { red: 0, green: 255, blue: 128 };

// // add new method
// rect.getArea = function () {
//     return this.width * this.height;
// };


// console.log(rect.getArea());             // => 200

// console.log(rect.width);


// var circle = { radius: 8 };

// console.log(circle.radius);             // => 8
// console.log(delete circle.radius);      // => true
// console.log(circle.radius);    