
/**
 * This functions Split an Array in equal or not equal parts
 *
 * @param {Array<any>} arrayToSplit
 * @param {number} parts
 * @return {*} 
 */
const arraySplitter = (arrayToSplit: Array<any>, parts: number) => {
    const splittedArray: Array<any> = [];

    for (let i = 0; i < arrayToSplit.length; i += parts) {
        splittedArray.push(arrayToSplit.slice(i, i + parts));
    }

    return splittedArray;
}

export { arraySplitter }