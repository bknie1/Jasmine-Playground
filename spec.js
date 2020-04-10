// BASIC IMPLEMENTATION

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

// JASMINE MATCHERS DEMO

describe('Jasmine Matchers', function() {
	it('allows for === and deep equality', function() {
		expect(1 + 1).toBe(2);
		expect([ 1, 2, 3 ]).toEqual([ 1, 2, 3 ]);
	});
	it('allows for easy precision checking', function() {
		expect(3.1415).toBeCloseTo(3.14, 2);
	});
	it('allows for easy truthy / falsey checking', function() {
		expect(0).toBeFalsy();
		expect([]).toBeTruthy();
	});
	it('allows for easy type checking', function() {
		expect([]).toEqual(jasmine.any(Array));
		expect(function() {}).toEqual(jasmine.any(Function));
	});
	it('allows for checking contents of an object', function() {
		expect([ 1, 2, 3 ]).toContain(1);
		expect({ name: 'Elie', job: 'Instructor' }).toEqual(jasmine.objectContaining({ name: 'Elie' }));
	});
});

// PENDING SPECS

describe('Pending Specs', function() {
	xit('can start with an xit', function() {
		expect(true).toBe(true);
	});

	it('is a pending test if there is no callback function');

	it('is pending if the pending function is invoked inside the callback', function() {
		expect(2).toBe(2);
		pending();
	});
});

// SPIES

var add = (a, b, c) => {
	return a + b + c;
};

describe('add', () => {
	let addSpy, result;
	beforeEach(() => {
		addSpy = spyOn(window, 'add');
		result = addSpy();
	});
	it('is can have params test', () => {
		expect(addSpy).toHaveBeenCalled();
	});
});

describe('add', () => {
	let addSpy, result;
	beforeEach(() => {
		addSpy = spyOn(window, 'add');
		result = addSpy();
	});
	it('is can have params test', () => {
		expect(addSpy).toHaveBeenCalled();
	});
});

describe('add', () => {
	let addSpy, result;
	beforeEach(() => {
		addSpy = spyOn(window, 'add').and.callThrough(1, 2, 3);
		result = addSpy();
	});
	it('is can have params test', () => {
		expect(addSpy.calls.any()).toBe(true);
		expect(addSpy.calls.count()).toBe(1);
	});
});

// ASYNC TESTING

const getUserInfo = (username) => {
	return $.getJSON('https://api.github.com/users/' + username);
};

describe('#getUserInfo', () => {
	it('returns the correct name for the user', (done) => {
		getUserInfo('bknie1').then((data) => {
			expect(data.name).toBe('Brandon Knieriem');
			done();
		});
	});
});
