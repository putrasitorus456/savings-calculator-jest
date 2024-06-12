const calculateMonthsToSave = require('../src/savingsCalculator');

test('calculate months to save with initialAmount less than targetAmount', () => {
  expect(calculateMonthsToSave(100, 50, 200)).toBe(2);
});

test('calculate months to save with initialAmount equal to targetAmount', () => {
  expect(calculateMonthsToSave(200, 50, 200)).toBe(0);
});

test('calculate months to save with initialAmount greater than targetAmount', () => {
  expect(calculateMonthsToSave(300, 50, 200)).toBe(0);
});

test('calculate months to save with zero monthly savings', () => {
  expect(calculateMonthsToSave(100, 0, 200)).toBe(Infinity);
});

test('calculate months to save with target already reached', () => {
  expect(calculateMonthsToSave(500, 50, 200)).toBe(0);
});