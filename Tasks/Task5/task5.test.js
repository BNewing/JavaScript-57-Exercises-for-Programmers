const addValues = require('./task5.js');

test('adds 1 + 2 to equal 3', () => {
  expect(addValues(1, 2)).toBe(3);
});