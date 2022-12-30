export default function ship(length=3){
    let _shipLength = length;
    let _hits = 0;
    let _isSunk = false;

    const hit = () => {
        _hits += 1;
        if (_hits >= _shipLength){
            _isSunk = true;
        };
    };

    return {
        get length(){return _shipLength},
        get hitsTaken(){return _hits},
        hit,
        get isSunk(){return _isSunk},
        set isSunk(bool){_isSunk = bool}
    };
};