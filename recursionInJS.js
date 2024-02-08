
// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
//Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
function sumRange(number){
    if (number === 1) return 1;
    return number + sumRange(number - 1);
};


// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function powpow(broj, kvadrat){
    if (kvadrat === 0) return 1;
    return broj * powpow(broj, kvadrat-1);
}

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(number){
    if(number === 1) return 1;
    return number * factorial(number - 1);
}

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
function all(array, callback){
    var shallowCopy = shallowCopy || array.slice();


    if(shallowCopy.length === 0) return true;

    if(callback(shallowCopy[0])){
        shallowCopy.shift();
        return all(shallowCopy, callback);

    } else {
        return false;
    }
}

var allAreLessThanSeven = all([1,2,3,5,9,2,4], function(num){
    console.log(num);
    return num < 7;
});

console.log(allAreLessThanSeven);



// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Moje resenje
function productOfArray(array){
    if ( array.length === 0 ) return 1;

    return array[0] * productOfArray(array.slice(1));
}

// Njihovo resenje
// Manji memory consumption od mog. Moje resenje kreira stalno novi niz u memoriji dok njihovo resenje radi sa jednim nizom, samim time ne koriste dodatnu memoriju
function productOfArray2(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray2(array);
}

// Chatgpt gigachad resenje
function productOfArray3(array) {
    const [first, ...rest] = array;
    return array.length === 0 ? 1 : first * productOfArray3(rest);
}

// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                },
                magicNumber: 45,
                something: 'foo3'
            }
        }
    }
}

// The bad solution
function contains (obj, value){
    for(var key in obj){

        if(typeof obj[key] === 'object'){
            if(contains (obj[key], value))
                return true;
        }

        else if(obj[key] === value)
            return true;
    }
    return false;
}

// The gucci solution that was meant to be learned
function contains2(object, searchValue) {
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      if (contains2(value, searchValue)) {
        return true;
      }
    }
    return false;
  }

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array
// Nedostatak ovoga jeste u tome sto direktno menjamo / unistavamo promenjivu koja sadrzi niz
// Mozda bi bilo bolje ovo isto odraditi putem for petlje kao u sledecem primeru
function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

// Practice on my own
function totalInt(array){
    if(array.length === 0) return 0;

    let total = 0;
    let first = array.shift();

    if(Array.isArray(first))
        total += totalInt(first);
    else if (Number.isInteger(first))
        total += 1;

    return total += totalInt(array);
}

var numOfIntegers = totalInt([[[5], 3],5, ['foo'], [], [4, [5, 6]]]);
console.log('Total number of integers is: ' + numOfIntegers);



// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists
// Ovu sam uspeo sam da napisem, makar sam uspeo iz prve da provalim da je potpuno ista kao prosla i bez gledanja i podsetnika sam je napisao.
// PROBLEM sa ovime jeste sto fakticki unistim podatke, tj niz u l promenjivoj.
// Kada pogledas console.log(l) videces da ti je na kraju ostao samo prazan skup
function SumSquaresFirstTry(array){
    if(array.length === 0) return 0;

    let sum = 0;
    let first = array.shift();

    if(Array.isArray(first)){
        sum += SumSquaresFirstTry(first);
    }
    else if (Number.isInteger(first)){
        sum += first*first;
    }

    return sum += SumSquaresFirstTry(array);
}

// Resenje, ovim putem samo prolazimo kroz niz ne menjajuci njegove originalne vrednosti
function SumSquares(array){
    if(array.lentgh === 0) return 0;

    let total = 0;

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            total += SumSquares(array[i]);
        }
        else if (Number.isInteger(array[i])){
            total += array[i] * array[i];
        }
    }

    return total;    
}



var l = [1,2,3]; 
console.log(SumSquaresFirstTry(l));
console.log(l);
console.log('======================================');
l = [[1,2],3]; 
console.log(SumSquaresFirstTry(l));
console.log(l);
console.log('======================================');
l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquaresFirstTry(l));
console.log(l);
console.log('======================================');
l = [10,[[10],10],[10]] 
console.log(SumSquaresFirstTry(l));
console.log(l);
console.log('======================================');

// Koriscenjem druge verzije gde cuvamo podatke, tj ne menjamo original niz
l = [1,2,3]; 
console.log(SumSquares(l));
console.log(l);
console.log('======================================');
l = [[1,2],3]; 
console.log(SumSquares(l));
console.log(l);
console.log('======================================');
l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l));
console.log(l);
console.log('======================================');
l = [10,[[10],10],[10]] 
console.log(SumSquares(l));
console.log(l);
console.log('======================================');




// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
function replicate(times, number){
    if(times <= 0) return [];

    return [number].concat(replicate(times-1, number));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []


/*
    Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/
function fibsIt(num){
    if(num === 0) return [];
    if(num === 1) return [0];

    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    let result = [num1, num2, num3];

    for(let i = 3; i < num; i++){
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
        result.push(num3);
    }
    return result;
}
function testFibsIt(){
    console.log(fibsIt(8));
    console.log(fibsIt(9));
    console.log(fibsIt(10));
    console.log(fibsIt(11));
    console.log(fibsIt(12));
    console.log(fibsIt(13));
    console.log(fibsIt(14));
}
testFibsIt();


// Now write another function fibsRec which solves the same problem recursively.
function fibsRec(num){
    if(num < 2)
        return num;
    else
        return (fibsRec(num-1) + fibsRec(num-2));
}

console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));