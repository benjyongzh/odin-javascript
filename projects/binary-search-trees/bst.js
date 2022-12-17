let node = (data) => {
    let _data = data;
    let _left;
    let _right;
    return {
        get data() {return _data},
        set data(newData) {_data = newData},
        get left() {return _left},
        set left(newLeft) {_left = newLeft},
        get right() {return _right},
        set right(newRight) {_right = newRight},
    }
}