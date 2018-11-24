const task5JS = require('./task5.js');

const addValues = task5JS.addValues;
const subtractValues = task5JS.subtractValues;
const multiplyValues = task5JS.multiplyValues;
const divideValues = task5JS.divideValues;

test('adds 1 + 2 to equal 3', () => {
  expect(addValues(1, 2)).toBe(3);
});

test('subtracts 2 from 1 to equal 1', () => {
  expect(subtractValues(2, 1)).toBe(1);
});

test('multiplies 3 by 3 to equal 9', () => {
  expect(multiplyValues(3, 3)).toBe(9);
});

test('divides 2 by 1 to equal 2', () => {
  expect(divideValues(2, 1)).toBe(2);
});