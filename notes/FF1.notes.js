/** @format */

{/* prettier-ignore */}

/*
@ How to install typescript?: 
++ - For installing the typescript we need a compiler which we can install it globally on our system this commands:
1 - npm install -g typescript
2 - npx tsc
! Source Link : https://www.typescriptlang.org/ and download the typescript

@ Compiling the typescript file:
- In the typescript project we can compile the typescript file to a javascript file by using this command:
@ npx tsc .\fileName

@ Difference between typescript code and javascript code:
++ javascript code:
- Runs in the browser
- Has no extra-type-safety features built-in -> Not ideal for development

function add(a , b){
  return a + b;
}

++ typescript code:
- Does not run in the browser
- Great for development as it adds extra type-safety & catches potential errors

function add (a:number , b : number){
  return a + b;
}

@ Types in typescript:
++ number
++ string
++ any 
++ boolean
++ object
++ {} :
- in this way of setting the type we can set the name ana type of each property 
! Example:
let user = {
  name : string;
  age : number;
  isAdmin : boolean;
  id : number | string;
}
user = {
  name : "Sina",
  age : 20,
  isAdmin : true,
  id : 123,
}
++ Array<type>:
- In this type we have a array and in the <> we write the type of the values of the array
++ type[]:
- Also we can write the Array<type> like this (These two are simillar)

++ undefined :
- We can use this type for the functions that doesnt return anything
++ void:
- Also we can use this type for the functions that doesnt return anything


@ How to write functions in TS:
function functionName(parameter1: type, paremeter2: type): return type of the function {
  commands
}

@ How to expect a function to receive a function?:
- In functions we can pass in another function as a parameter 
! BUT CAN WE PASS IT LIKE THIS ? :
function calculate(a:number,b:number,calcFn){
  calcFn(a,b);
}
++ The answer is no we cant do this instead we set the type of the function that we pass. Look at this example:
function add(a:number,b:number){
  const result = a + b;
  return result;
}
function calculate( a:number ,b:number,calcFn(a:number,b:number)=> number){
  calcFn(a,b);
}
calculate(5,4,add);


*/
