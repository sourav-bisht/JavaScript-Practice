"use strict"; // treat all JS code as newer version..

/*
Datatypes in javascript
1. number -> 73, 9.80
2. boolean -> true/false
3. string -> "abc"
4. object -> for example :- null is an object.
5. undefined -> undefined.
6. null -> object type but null is also a standalone value.
*/

let num = 78
let bool = true
let str = "sourav"
let nll = null
let undef


function greet(name) {
    name = name || "Sourav"
    console.log(`Hello, ${name} ${num}`)
}

greet()
greet("Moto")
