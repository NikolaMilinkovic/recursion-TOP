
function merge(left, right){
    let i = 0 ,j = 0;
    const sequence = [];
    
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sequence.push(left[i++]);
        } else {
            sequence.push(right[j++]);
        }
    }

    return [...sequence, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(array){
    if(array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0,mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}


console.log('Pozivamo mergeSort i dobijamo: ' + mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));