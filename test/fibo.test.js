const mainFunction = require('../src/fibo');     //define and load the fibo.js function

describe("Fibonacci Series Tests", () => {     
    /* Validation to check if the input is a string.
       Input : string value
       Expected Output : Error message to ask user to input integer value*/
    test("Check string input", () => {
        var result = mainFunction.fib('abc')
        expect(result).toMatch(/You have entered a non-integer value. Please enter int value./);
    });
    /* Validation to check if the input is a non-positive number
        Input : negative integer
        Expected Output : Error message to ask user to input positive integer value*/
    test("Check negative input", () => {
        var result = mainFunction.fib(-5)
        expect(result).toMatch(/Please enter a positive integer value/);
    });
    /* Validation to check if the input is zero
       Input : 0
       Expected Output : Empty array*/
    test("Check for zero input", () => {
        var result = mainFunction.fib(0)
        expect(result).toHaveLength(0);
    });
    /* Validation to check if it is valid input - Positive flow
       Input : positive integer 5
       Expected Output : Array of fibonacci series with array length 5 */
    test("Check for happy flow", () => {
        var result = mainFunction.fib(5)
        expect(result).toHaveLength(5);
    });
    /* Validation to check when there is no input
       Input : empty
       Expected Output : Error message to ask user to input integer value */
    test("Check for no input", () => {
        var result = mainFunction.fib()
        expect(result).toMatch(/You have entered a non-integer value. Please enter int value./);
    });

});