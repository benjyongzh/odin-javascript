import mergeSortedArrays from "./mergeSortedArrays.js";

export default function mergeSort(array){
    //end condition
    if (array.length <= 1) return array;

    //divide array into 2
    const midPoint = array.length %2 == 0 ? (array.length / 2) : (array.length - 1) / 2;
    let firstHalf = array.slice(0, midPoint);
    let secondHalf = array.slice(midPoint);
    // console.log(firstHalf);
    // console.log(secondHalf);

    //sort 1st half
    firstHalf = mergeSort(firstHalf);

    //sort 2nd half
    secondHalf = mergeSort(secondHalf);

    
    //merge halves
    /*  let mergedArray = [];
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex < firstHalf.length && secondIndex < secondHalf.length){
        if (firstHalf[firstIndex] <= secondHalf[secondIndex]){
            mergedArray.push(firstHalf[firstIndex]);
            firstIndex++;
        } else {
            mergedArray.push(secondHalf[secondIndex]);
            secondIndex++;
        };
        if (firstIndex == firstHalf.length){
            mergedArray.push(...secondHalf.slice(secondIndex));
            break;
        };

        //secondArray is finished
        if (secondIndex == secondHalf.length){
            mergedArray.push(...firstHalf.slice(firstIndex));
            break;
        };
    };
    
    return mergedArray;
    */
    return mergeSortedArrays(firstHalf, secondHalf);
};


// let testArray = [1,6,2,7,3];
// console.log(mergeSort(testArray));