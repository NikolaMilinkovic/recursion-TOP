// Sum all numbers
function sumRange(num){
    if(num < 1) return 0;
    return num + sumRange(num - 1);
}

// Power function
function power(base, exponent){
    if (exponent < 1) return 1;
    return base * power(base, exponent -1);
}

// Factorial
function factorial(num){
    if (num <= 1) return 1;
    return num *= factorial(num - 1);
}

// Check all values in an array
function all(array, callback){

    const arr = [...array];
    if(arr.length === 0) return true;


    if(callback(arr[0])){
        arr.shift();
        
        return all(arr, callback);
    }
    else
        return false;
}

function isSmallerThan(num){
    if (num < 7)
        return true;
}

// Product of an array
function productOfArray(array){
    const arr = array.slice();
    if(arr.length === 0) return 1;
    return arr.shift() * productOfArray(arr);
}

// Search JS object
function contains(object, value){
    if(typeof object !== object || object === null)
        return object === value;

    for(const value of Object.values(object)){
        if(contains(object, value)){
            return true;
        }
    }

    return false;
}

// Parse multidimensional array
function totalIntegers(array){
    if(array.length === 0) return 0;

    let total = 0;
    let first = array.shift();

    if (Array.isArray(first)){
        total += totalIntegers(first);
    }
    else if (Number.isInteger(first)){
        total += 1;
    }

    return total + totalIntegers(array);
}

// Squared list
function SumSquares(list){
    if(list.length === 0) return 0;
    let total = 0;

    for(let i = 0; i < list.length; i++){
        if(Array.isArray(list[i])){
            total += SumSquares(list[i]);
        } else {
            total += list[i] * list[i];
        }
    }

    return total;
}
