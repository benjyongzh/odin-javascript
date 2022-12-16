const linkedList = () => {
    let listHead = null;
    let listTail = null;

    let append = value => {
        let newNode = node(value);
        if (!listHead){
            listHead = newNode;
            listTail = newNode;
        } else {
            listTail.next = newNode;
            listTail = newNode;
        };
    };

    let prepend = value => {
        let newNode = node(value, listHead);
        listHead = newNode;
    };

    let size = () => {
        let counter = 0;
        let pointer = listHead;
        do {
            counter += 1;
            pointer = pointer.next;
        } while (pointer != null);
        return counter;
    };
    let head = () => JSON.stringify(listHead);
    let tail = () => JSON.stringify(listTail);

    let at = index => {
        let counter = 0;
        let pointer = listHead;
        while (counter < size()){
            if (counter == index) return pointer;
            counter += 1;
            pointer = pointer.next;
        };
        return null;
    };

    let pop = () => {
        if (listHead == listTail){
            listHead = null;
            listTail = null;
        } else {
            //use at()
            let secondLastNode = at(size()-1);
            secondLastNode.next = null;
            listTail = secondLastNode;
        };
    };
    // contains(value)
    let contains = value => {
        let pointer = listHead;
        if (listHead == listTail && pointer.value == value) return true;
        while (pointer != null){
            if (pointer.value == value) return true;
            pointer = pointer.next;
        }
        return false;
    }

    // find(value)

    let toString = () => {
        let string = "";
        let pointer = listHead;
        while (pointer != null) {
            string += `( ${pointer.value} ) -> `;
            pointer = pointer.next;
        };
        string += `null`;
        return string;
    }
    // insertAt(value,index)
    // removeAt(index)


    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        //find,
        toString
    };
};

const node = (value = null, next = null) => {
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

let list1 = linkedList();
list1.append("dick");
// list1.append("james");
console.log(list1.head());
console.log(list1.tail());
console.log(list1.toString());