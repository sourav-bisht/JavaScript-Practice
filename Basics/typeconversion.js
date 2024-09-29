let variable = "002"
console.log(typeof variable)
let conVariable = Number(variable)
console.log(typeof conVariable)
console.log(conVariable)

/*
    1. to Number 
        **All the datatypes can be converted in number but the value may lost**

        -> "abc" -> value after conversion will be 'NaN' but it will be converted to number.
        -> "123" -> value after conversion will be 123 and the type will be number.
        -> "123ba" -> value after conversion will be 'NaN' and type will be number.
        -> "" -> value after conversion will be 0 and type will be number.
        -> true/false -> value after conversion will be 1/0 and type will be number.
        -> undefined -> value after conversion will be 'NaN' and type will be number.
        -> null -> value after conversion will be 0 and type will be number.

Although they all will get converted to number, but it is not compulsory that they will contain
the same value before conversion.
    
Q. Why null gives the value 0 and undefined give value 'NaN' after conversion?
    Ans-> Because javascript treat null as falsy which means 0 and also it didn't know that in
    what value the undefined get converted so it will give 'NaN'.

    2. to String
        -> all the values can be successfully changed into a string datatype.

    3. to Boolean
        -> null/undefined -> false
        -> 0/(either postive or negative) -> false/true
        -> empty string -> false
        -> not a empty string -> true



*/
