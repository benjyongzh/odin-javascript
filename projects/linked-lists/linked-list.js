function linkedList(){
    // append(value)
    // prepend(value)
    // size()
    // head()
    // tail()
    // at(index)
    // pop()
    // contains(value)
    // find(value)
    // toString()
    // insertAt(value,index)
    // removeAt(index)
};

const node = function(value = null, next = null){
    let nodeValue = value;
    let nodeNext = next;

    return {
        get value() { return nodeValue},
        set value(newValue){
            nodeValue = newValue;
        },

        get next() { return nodeNext},
        set next( newNext) {
            nodeNext = newNext;
        },
    };
};

let tom = node("dick", "jerry");
console.log(tom);