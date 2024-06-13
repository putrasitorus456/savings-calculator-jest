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
  let caseLabel;
  if (expected === 0) {
    caseLabel = "Boundary Case";
  } else if (expected === Infinity) {
    caseLabel = "Extreme Case";
  } else {
    caseLabel = "Normal Case";
  }

  test(`${caseLabel} - initialAmount: ${initialAmount}, monthlySavings: ${monthlySavings}, targetAmount: ${targetAmount}, expected: ${expected}`, () => {
    expect(calculateMonthsToSave(initialAmount, monthlySavings, targetAmount)).toBe(expected);
  });
});