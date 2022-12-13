function sumRange(num){
    //end condition
    if (num <= 1) return 1;
    
    return num+sumRange(num-1);
};

console.log(sumRange(10));