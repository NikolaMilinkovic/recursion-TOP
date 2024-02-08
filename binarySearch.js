// Itterative Binary Search
function itterativeBinarySearch(array, target){
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex) / 2);

    if(array[mid] === target)
        return 'Target found at index ' + mid;
    else if(array[mid] < target)
        leftIndex = mid + 1;
    else
        rightIndex = mid - 1;
    }

    return 'Target has not been found in the array!';
}
let test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(itterativeBinarySearch(test, 17));





// Recursive Binary Search
// My solution
function recursiveBinarySearch(array, target, start, end){
    let leftIndex = start;
    let rightIndex = end;

    if(leftIndex > rightIndex) return 'Target has not been found in the array!';

    let mid = Math.floor((leftIndex + rightIndex) / 2);

    if(array[mid] === target)
        return 'Target found at index ' + mid;
    else if(array[mid] < target)
        return recursiveBinarySearch(array, target, mid + 1, end);
    else
        return recursiveBinarySearch(array, target, start, mid - 1);
}
console.log(recursiveBinarySearch(test, 5, 0, test.length-1));



// Recursive Binary Search
// YT solution
function recursiveBinarySearch2(array, target){
    return search(array, target, 0, array.length - 1);
}
function search(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return 'Target not found.';

    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if(array[mid] === target)
        return 'Target found at index ' + mid;
    if(target < array[mid])
        return search(array, target, leftIndex, mid-1);
    else
        return search(array, target, mid+1, rightIndex);
}
console.log(recursiveBinarySearch2(test, 5));