function sumRange(num){
    //end condition
    if (num <= 1) return 1;
    
    return num+sumRange(num-1);
};

// console.log(sumRange(10));

function power(base, exponent){
    //end condition
    if (exponent === 0) return 1;

    return base*power(base, exponent-1);
};

// console.log(power(5,3));

function factorial(num){
    //end condiiton
    if (num <= 1) return 1;

    return factorial(num-1)*num;
};

// console.log(factorial(5));

function all(array, cb){
    //end condition
    if (array.length <= 1) return cb(array[0]);
    array.shift();
    return all(array, cb);
};

// var allAreLessThanSeven = all([1,2,7], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven);

function productOfArray(array){
    //end condition
    if (array.length <= 1) return array[0];
    let firstNum = array.shift();
    return firstNum*productOfArray(array);
};

// console.log(productOfArray([1,2,3]) )// 6
// console.log(productOfArray([1,2,3,10])) //60

function contains(obj, value) {
    for (const key in obj) {
        //console.log(obj[key]);

        //end condition
        if (obj[key] == value){
            //console.log("found it");
            return true;
        };

        if (typeof obj[key] === 'object' && obj[key] != null) {
            //console.log(`going into ${obj[key]}`);
            return contains(obj[key], value);
        };
    };
    return false;
    
};

/* var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, "foo")); // false */

function totalIntegers(array){
    let count = 0;
    array.forEach(element => {
        //console.log(element);
        if (Array.isArray(element)){
            count += totalIntegers(element);
        };

        if (Number.isInteger(element)) count += 1;
    });
    return count;
};

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

function sumSquares(array){
    let count = 0;
    array.forEach(element => {
        if (Array.isArray(element)){
            count += sumSquares(element);
        }

        else if (!Number.isNaN(element)){ 
            
            //  console.log(`element is now ${element}`);
            // console.log(`square is now ${element**2}`);
            count += element**2;
            // console.log(`count is now ${count}`);
        };
    });
    return count;
};

/* var l = [1,2,3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400 */

function replicate(reps, num){
    if (reps <= 0) return [];
    return [num].concat(replicate(reps-1, num));
};

/* console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // [] */