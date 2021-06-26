const currency = require('currency.js');
const express = require('express');
const router = express.Router();
const rateCalculator = require('../utils/rateCalculator');

router.get('/monthly', (req, res) => {
  const downPayment = parseFloat(req.query.downPayment);
  const monthsNumber = parseFloat(req.query.monthsNumber);
  const interestRate = parseFloat(req.query.interestRate);
  const finalPayment = parseFloat(req.query.finalPayment);
  // must add checks for type and returning status code 400 and message if not right type

  let monthlyRate = rateCalculator.calcMonthlyRate(downPayment, monthsNumber, interestRate, finalPayment)

  res.status(200).send({ monthlyRate });
});

module.exports = router;
