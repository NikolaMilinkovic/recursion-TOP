// Process of combining two lists
// They need to be sorted
function merge(listA, listB){
let i=0, j=0;
let listC = [];

while(i < listA.length && j < listB.length){
    if(listA[i] < listB[j]){
        listC.push(listA[i++]);
    } else {
        listC.push(listB[j++]);
    }
}

console.log([...listC, ...listA.slice(i), ...listB.slice(j)]);

return [...listC, ...listA.slice(i), ...listB.slice(j)];
}

// MergeSort function
function mergeSort(array){

    if(array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    console.log('left is: ' + left);
    console.log('right is: ' + right);

    return merge(left, right);
}

let testArray = [1,4,3,7,5,9,12,223,32,78,55,56,900];
console.log(mergeSort(testArray));