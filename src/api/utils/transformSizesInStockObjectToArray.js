export const sizesInStockArrayFromObject = (sizesInStockObject) => {
    if (typeof sizesInStockObject !== 'object') {
        return null;
    }

    let sizesMap = new Map(Object.entries(sizesInStockObject));

    for (let [key, value] of sizesMap) {
        if (value === false) {
            sizesMap.delete(key);
        }
    }

    sizesMap.delete('id');

    const sizesArray = [];
    const regexp = /\d+/;

    for (let [key] of sizesMap) {
        sizesArray.push(Number(regexp.exec(key)[0]));
    }

    return sizesArray;
};
