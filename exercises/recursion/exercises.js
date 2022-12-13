function sumRange(num){
    //end condition
    if (num <= 1) return 1;
    
    return num+sumRange(num-1);
};

console.log(sumRange(10));

function power(base, exponent){
    //end condition
    if (exponent === 0) return 1;

    return base*power(base, exponent-1);
}

console.log(power(5,3));