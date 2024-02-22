// 1 // implicit binding

// const person = {
//     name : "raj",
//     age : 22,
//     greet : function(){
//         return `Hello ${this.name}, you are ${this.age}Years old`
//     }
// }


// console.log(person.greet());


// 2 // Explicit Binding .. this 
//  call(), bind() or apply()


// function ageVerify (){
//     if (this.age > 18 ){
//         console.log("Yes you can drive");
//     }else {
//         console.log("No you cannot drive");
//     }
// }


// const per1 = {age : 21};
// const per2 = { age:16};

// ageVerify.call(per1);
// ageVerify.call(per2);


// 3 // Default binding 



const age = 22;


function veryfyAge(){
    return this.age;

}


console.log(veryfyAge());



// const person = {
//     name : "raj",
//     age : 22,
//     greet : () => {
//         return `Hello ${this.name}, you are ${this.age}Years old`
//     }
// }


// console.log(person.greet());




const a = 34;


{
    const b = 56;
    console.log(b);
}

console.log(a);







