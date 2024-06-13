const calculateMonthsToSave = require('../src/savingsCalculator');
const fs = require('fs');
const path = require('path');

const testDataPath = path.join(__dirname, 'testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));

testData.forEach(data => {
  if (data.expected === "Infinity") {
    data.expected = Infinity;
  }
});

describe.each(testData)('calculateMonthsToSave', ({ initialAmount, monthlySavings, targetAmount, expected }) => {
  test(`initialAmount: ${initialAmount}, monthlySavings: ${monthlySavings}, targetAmount: ${targetAmount}, return: ${expected}`,  () => {
    expect(calculateMonthsToSave(initialAmount, monthlySavings, targetAmount)).toBe(expected);
  });
});