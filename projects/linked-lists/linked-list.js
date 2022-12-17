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
            listTail = at(size()-2);
            listTail.next = null;
        };
    };

    let contains = value => {
        let pointer = listHead;
        if (listHead == listTail && pointer.value == value) return true;
        while (pointer != null){
            if (pointer.value == value) return true;
            pointer = pointer.next;
        }
        return false;
    }

    let find = value => {
        let counter = 0;
        let pointer = listHead;
        while (pointer != null){
            if (pointer.value == value) return counter;
            pointer = pointer.next;
            counter += 1;
        };
        return null;
    };

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

    let insertAt = (value,index) => {
        let newNode = node(value);
        let nodeBefore = at(index-1);
        let nodeAfter = at(index);
        nodeBefore.next = newNode;
        newNode.next = nodeAfter;
    }

    // removeAt(index)
    let removeAt = index => {
        //index out of range
        if (index >= size()){
            throw console.error("index out of range, bruh");
        };

        let nodeBefore = at(index-1);

        //check if its the last index
        if (index == size() - 1){
            pop();
            return;
        } else if (index == 0){
            //pop the head
            listHead = at(1);
            return;
        };

        //index is somewhere in the middle
        let nodeAfter = at(index+1);
        nodeBefore.next = nodeAfter;
    }


    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
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

/* let list1 = linkedList();
list1.append("dick");
list1.append("james");
list1.append("harry");
list1.prepend("jerry");
list1.append("john");
list1.prepend("ronathan");
console.log(list1.head());
console.log(list1.tail());
console.log(list1.toString());
console.log(list1.size());
console.log(JSON.stringify(list1.at(4)));
list1.pop();
console.log(list1.head());
console.log(list1.toString());
console.log(list1.contains("harry"));
console.log(list1.contains("john"));
console.log(list1.find("harry"));
console.log(list1.find("john"));
list1.insertAt("tim", 2);
console.log(list1.toString());
list1.removeAt(3);
console.log(list1.toString()); */

/* 
let node1 = node("nodevalue1");
let node2 = node("nodevalue2");
node1.next = node2;
console.log(JSON.stringify(node1.next));
node1.next = null;
console.log(JSON.stringify(node1.next)); */