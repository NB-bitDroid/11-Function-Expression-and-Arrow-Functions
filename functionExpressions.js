// In JS functions can be created in 2 main ways:
// - Function declarations (eg. function(){})
// - Function expressions

//The logSomething function was HOISTED
// Hoisted: loaded into memory before the interpreter started executing code.
logSomething("Hello From CMP!")

// hello is not Hoisted - treatedlike a variable
hello();

// Here's a function expression:
const hello = function() {
    console.log("Hello");
};
// now hello the variable, contains the function
// In this case, we can treat the finction like data
// It can be stored, passed around, or used in other functions.
hello();

function callMyOtherFunction(myFunc) {
    myFunc();
}
callMyOtherFunction(hello);

const goodBye = ()=>{
    console.log("Goodbye");
};

goodBye();

function logSomething(msg){
    console.log(msg);
};