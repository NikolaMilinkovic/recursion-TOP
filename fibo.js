// Itterative method for fibo sequence
function fibo(n){
    const fib = [0, 1];
    for(let i = 2; i<n; i++){
        fib.push(fib[fib.length-2] + fib[fib.length-1]);
    }

    return fib;
}

console.log(fibo(15));