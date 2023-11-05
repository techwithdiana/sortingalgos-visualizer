function randomNumberFrom(l, r) {
	return Math.floor(Math.random() * (l - r + 1) + r)
}

export const generateArray = (arrSize) => {
    const arr = [];

    for (let i = 0; i < arrSize; i++) {
        arr.push(randomNumberFrom(10, arrSize * 10));
    }

    return arr;
}