function calcMonthlyRate(downPayment, monthsNumber, interestRate, finalPayment) {
  let monthlyRate = interestRate * downPayment / ( 1 - ( 1 / (1 + interestRate) ** monthsNumber ))

  if (finalPayment) {
    monthlyRate += finalPayment;
  }

  return monthlyRate;
}


module.exports = {
  calcMonthlyRate
};