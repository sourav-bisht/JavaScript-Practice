console.log( null > 0 )
console.log( null == 0 )
console.log( null >= 0 )

/*
    In javascript, comparison operators like >=, <=, <, > changes the null into 0 that's why
    null >= 0 gives true output, but == didn't converts null into 0 so it gives false output.
*/

/* 
    === strictly compares both of the values, means it also compares the datatype, while
    == loosly compares both of the values, it converts the type of the values then compares them.
*/

console.log( '2.00' == 2 )
console.log( '2.00' === 2 )

console.log( '3' > 2 )
