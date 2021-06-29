export const shuffle = <T>(arr: T[]) => {
	let newArr = [...arr];
	var currentIndex = newArr.length,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[newArr[currentIndex], newArr[randomIndex]] = [
			newArr[randomIndex],
			newArr[currentIndex],
		];
	}

	return newArr;
};
