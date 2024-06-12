function calculateMonthsToSave(initialAmount, monthlySavings, targetAmount) {
    if (initialAmount >= targetAmount) return 0;
    if (monthlySavings === 0) return Infinity;
  
    let months = 0;
    let currentAmount = initialAmount;
  
    while (currentAmount < targetAmount) {
      currentAmount += monthlySavings;
      months++;
    }
  
    return months;
  }
  
  module.exports = calculateMonthsToSave;