export default function mergeSortedArrays(array1, array2){
    let newArray = [];
    let firstCounter = 0;
    let secondCounter = 0;
    while (firstCounter < array1.length && secondCounter < array2.length){
        if (array1[firstCounter] <= array2[secondCounter]){
            newArray.push(array1[firstCounter]);
            firstCounter++;
        } else {
            newArray.push(array2[secondCounter]);
            secondCounter++;
        };

        //firstArray is finished
        if (firstCounter == array1.length){
            newArray.push(...array2.slice(secondCounter));
            break;
        };

        //secondArray is finished
        if (secondCounter == array2.length){
            newArray.push(...array1.slice(firstCounter));
            break;
        };
    };
    return newArray;
};

// let testArray1 = [6];
// let testArray2 = [5];
// console.log(mergeSortedArrays(testArray1, testArray2));