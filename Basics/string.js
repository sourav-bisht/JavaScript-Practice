/* 
    Strings in javascript are immutable whether it is primitive string or String object,
    js internally wraps the primitive string by String object to use all the String.prototype
    methods in the primitive strings and when the methods are used it automatically unwraps the
    string into primitive, this is also called boxing and unboxing.
*/

/* let name1 = "Sourav"
let name2 = new String("Sourav")
    
    all the methods are same for both the strings.

console.log(name1.toUpperCase())
console.log(name2.toLowerCase())

console.log(name1.__proto__)
console.log(name2.__proto__)
 */

let str = "   Sourav Bisht   "
let name = str.trim()
console.log(name)

let arr = name.split(" ")
console.log(arr[0], arr[1])

let newStr = "Sourav Sourav Bisht Bisht Sourav"
console.log(newStr.replaceAll("Sourav","Gaurav"))

console.log(newStr.slice(-12))
console.log(newStr.slice(-25,-13))
console.log(newStr.slice(0,7))  // slice(startind, endind) --> endind excluded

console.log(newStr.substring(0,7))  // substring(startind, endind) --> endind excluded
console.log(newStr.substring(-23,7)) // diff. between slice and substring is that, <0 treated as 0.

console.log(newStr.substr(0,6)) // substr(startind, length)
