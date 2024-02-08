const nums = [3, 2, 1, 13, 8, 5, 0, 1];

function merge(list1, list2) {
    const seq = []
    let i = j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            seq.push(list1[i])
            i++
        } else {
            seq.push(list2[j])
            j++
        }
    }

    return [...seq, ...list1.slice(i), ...list2.slice(j)]
}

function mergeSort(nums) {
    if (nums.length <= 1) return nums

    const mid = Math.floor(nums.length / 2)
    const left = mergeSort(nums.slice(0, mid))
    const right = mergeSort(nums.slice(mid))
    
    return merge(left, right)
}

console.log(mergeSort(nums))