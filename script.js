const earth = {
	isRound: true,
	numberFromSun: 3,
	hasTheWorstCat: false,
	hasTheBestCat: true
};

describe('Earth', () => {
	it('is round', () => {
		expect(earth.isRound).toBe(true);
	});
	it('is the third planet from the sun', () => {
		expect(earth.numberFromSun).toBe(3);
	});
	// it('has the worst cat in the world (Purple)', () => { // TEST FAILURE
	// 	expect(earth.hasTheWorstCat).toBe(true);
	// });
	it('has the BEST cat in the world (Purple)', () => {
		expect(earth.hasTheBestCat).toBe(true);
	});
});
