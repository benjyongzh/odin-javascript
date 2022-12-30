export default function ship(length=3){
    let _shipLength = length;
    let _hits = 0;

    const hit = () => _hits += 1;

    return {
        get length(){return _shipLength},
        get hitsTaken(){return _hits},
        hit,
        get isSunk(){return _hits >= _shipLength},
    };
};