function  analyzeArray(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let min = sorted[0];
    let max = sorted[sorted.length - 1];
    let length = sorted.length;

    let total = sorted.reduce((sum, num) => {
        return sum += num;
    }, 0);

    const average = total /  length;

    return {
        average,
        min,
        max,
        length,
    }
}

module.exports = analyzeArray;