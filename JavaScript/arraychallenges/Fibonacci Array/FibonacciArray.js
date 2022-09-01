function Fibonacci(maxIndex){

    var fib = [0,1];
    for(var i=2; i < maxIndex ; i++){
        console.log("hi")
        fib[i] = fib[i - 2] + fib[i - 1]
        // fib.push(fib[i])
    }
    return fib;  
}
var maxIndex = 10;
console.log(Fibonacci(maxIndex));

