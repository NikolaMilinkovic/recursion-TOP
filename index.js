// #1 Solution with for loop
const sumTo = (num) => {
    let sum = 0;
    for (let i=0; i<=num; i++){
        sum += i;
    }
    return sum;
}
// #2 Solution using recursion
const recursiveSumTo = (num) => {
    if(num === 1) return 1;
    return num + recursiveSumTo(num-1);
}
// #3 Solution using arithmetic progression formula
const arithmeticSumTo = (num) => {
    return (num*(1+num))/2;
}
// Factorial using for loop
const factLoop = (num) => {
    let fact = 1;
    for(let i = 1; i<=num; i++){
        fact *= i;
    }
    return fact;
}
// Factorial using recursion
const factRecursive = (num) => {
    if (num === 1) return 1;
    return num * factRecursive(num - 1);
}
// Fibbonaci num via loop
const fibboLoop = (num) => {
    let num1 = num-1;
    let num2 = num-2;
    return num1 + num2;
}
// Fibbonacci num via recursion
const fibooRecursive = (num) => {
    return num <= 1 ? num : fibooRecursive(num-1) + fibooRecursive(num-2);
}