export const fetchItemInfo = async url => {
    const data = await fetch(url);
    const itemInfo = await data.json();
    return {
        name: itemInfo.names[7].name,
        id: itemInfo.id,
        cost: itemInfo.cost,
        description: itemInfo.effect_entries[0].effect,
        image: itemInfo.sprites.default,
    };
};