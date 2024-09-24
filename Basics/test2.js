const accountId = 3456      // constant values cannot be change throughout the whole program.
let accountName = "Sourav Bisht" // method of declearing a variable.
var accountPass = '12345' // also method of declearing a variable but not used now.
accountState = "Uttarakhand" // don't use this method of declearing variable.
let account // when the variable is not assigned with values then it shows undefined.

//accountId = 56        **TypeError : Assignment to the constant variable.**

console.table([accountId, accountName, accountPass, accountState, account])
