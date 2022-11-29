// Function to generate fibonacci series

const mainFunction = {
    fib : function(n) {
        if (parseInt(n) < 0) {                 // Check if the input is non-positive number
            return "Please enter a positive integer value";
        } else if (!Number.isInteger(parseInt(n))) {     //check if the input is a string
            return "You have entered a non-integer value. Please enter int value.";
        } else if (parseInt(n) === 0){     
            return [];
        } else if (parseInt(n) === 1){
            return [0];
        } else {
            let arr = [0, 1];
            for (let i = 2; i < parseInt(n) ; i++){
                arr.push(arr[i - 2] + arr[i - 1]);
            }
            return arr;
            }
    }
};

// Exporting fibo function as module to use it in jest unit testing
module.exports = mainFunction

//Read command line args to accept the user input
const myArgs = process.argv.slice(2);
if (myArgs.length > 0){
    console.log('User input: ', myArgs[0]);
    console.log(mainFunction.fib(myArgs[0]))
}
