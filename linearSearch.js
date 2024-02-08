// Itterative method for linearSearch
function linearSearch(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target)
            return 'Element found on index array['+i+']'
    }

    return 'Element not found';
}
const test = [1,2,3,4,5,6,7,8,9];
console.log(linearSearch(test, 5));