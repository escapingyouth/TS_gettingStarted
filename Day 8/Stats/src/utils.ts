export const dateStringToDate = (dateString: string): Date => {
	// ex. 28/10/2018
	const dateParts = dateString.split('/').map((value: string): number => {
		return parseInt(value); // [28, 10, 2018]
	});

	return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // 2018, 9, 28
};
