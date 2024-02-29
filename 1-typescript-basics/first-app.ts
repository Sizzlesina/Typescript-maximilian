/** @format */

let userName = "Max";
// userName = 34; // this cant be done because typescript care about the types and this variable is a string typed variable

// !HINT: But in javascript we can do this
// string type
let Name: string = "dad";
// number type
let userAge: number = 20;
// boolean type
let isValid: boolean = true;

// @ Sometime we need a variable to be more than one type for example somewhere it should be string and somewhere it should be number

let userId: string | number = "abc";
console.log(userId);
userId = 123;
console.log(userId);

/*
let user;
let user : object;
*/

// ++ Custom type:
type stringOrNum = string | number;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: stringOrNum;
};

let user: User;
/*
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: stringOrNum;
};
*/
user = {
  name: "Max",
  age: 12,
  isAdmin: true,
  id: "abc",
};

// let hobbies: Array<string>;
let hobbies: string[]; // number[],boolean[]
// {name : string,age: number}

hobbies = ["Sports", "Cooking", "Reading"];

const API_KEY = "abc";

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// ++ Custom type
type addFn = (a: number, b: number) => number;
function calculate(
  a: number,
  b: number,
  // calcFn: (a: number, b: number) => number
  calcFn: addFn
) {
  calcFn(a, b);
}
calculate(5, 3, add);
