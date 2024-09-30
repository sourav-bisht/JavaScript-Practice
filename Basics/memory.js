// Stack and Heap memory

/*
    Stack store the primitive datatypes.
*/

let one = "sourav"
let two = one       // copy of one given to two.
two = "gaurav"

console.log(one)
console.log(two)

/* 
    In above example, the copy of the variable one is given to the variable two and the change 
    only occurs in variable two if the new value is given in variable two.
*/


// Heap store the non primitive datatype and the reference of values is stored in stack.

let userOne = {
    name : "Sourav",
    age : 21
}

let userTwo = userOne       // actual reference of userOne is given to userTwo.

userTwo.name = "Sourav Bisht"

console.log(userTwo.name)
console.log(userOne.name)

/*
    In this case, the reference is given to the userTwo due to which any change in the userTwo
    leads to change in the userOne.
*/