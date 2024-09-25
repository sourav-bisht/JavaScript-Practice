"use strict"; // treat all JS code as newer version..

/*
Datatypes in javascript
1. number -> 2^53
2. boolean
3. string
4. undefined
5. null -> standalone value
6. object
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
