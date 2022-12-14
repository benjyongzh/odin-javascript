function mergeSort(array){
    //end condition
    if (array.length <= 1) return array;

    //divide array into 2
    const midPoint = array.length %2 == 0 ? (array.length / 2) : (array.length - 1) / 2;
    let firstHalf = array.slice(0, midPoint);
    let secondHalf = array.slice(midPoint);
    console.log(firstHalf);
    console.log(secondHalf);

    //sort 1st half
    firstHalf = mergeSort(firstHalf);

    //sort 2nd half
    secondHalf = mergeSort(secondHalf);

    /*
    //merge halves
    const mergedArray = [];
    for (let i = 0; i < firstHalf.length + secondHalf.length - 2; i ++){
        if (firstHalf == []){
            mergedArray.concat(secondHalf);
        } else if (secondHalf == []){
            mergedArray.concat(firstHalf);
        } else if (firstHalf[0] < secondHalf[0]){
            mergedArray.push(firstHalf[0]);
            firstHalf.shift();
        } else {
            mergedArray.push(secondHalf[0]);
            secondHalf.shift();
        };
    };
    return mergedArray; */
    return firstHalf.concat(secondHalf);
};


let testArray = [6,1,78];
console.log(mergeSort(testArray));