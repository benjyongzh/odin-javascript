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

var nestedObject = {
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
console.log(contains(nestedObject, "foo")); // false