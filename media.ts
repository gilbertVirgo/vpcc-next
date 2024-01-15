

export default (min: number, max?: number) => {
	let minString = `@media (min-width: ${min}px)`;
	return max ? minString + ` and (max-width: ${max - 1}px)` : minString;
};
