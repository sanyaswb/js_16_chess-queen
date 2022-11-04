const queen = require("./index");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof queen(4, 8, 7, 5);

	expect(type).toBe('boolean');
});

test('Тест. x1: 4, y1: 8, x2: 7, y2: 5', () => {
	const res = queen(4, 8, 7, 5);

	expect(res).toBe(true);
});

test('Тест. x1: 2, y1: 7, x2: 8, y2: 1', () => {
	const res = queen(2, 7, 8, 1);

	expect(res).toBe(true);
});

test('Тест. x1: 8, y1: 8, x2: 5, y2: 4', () => {
	const res = queen(8, 8, 5, 4);

	expect(res).toBe(false);
});

test('Тест. x1: 5, y1: 3, x2: 4, y2: 2', () => {
	const res = queen(5, 3, 4, 2);

	expect(res).toBe(true);
});

test('Тест. x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = queen(5, 6, 8, 8);

	expect(res).toBe(false);
});

test('Тест. x1: 6, y1: 2, x2: 8, y2: 1', () => {
	const res = queen(6, 2, 8, 1);

	expect(res).toBe(false);
});

test('Тест. x1: 3, y1: 2, x2: 3, y2: 7', () => {
	const res = queen(3, 2, 3, 7);

	expect(res).toBe(true);
});