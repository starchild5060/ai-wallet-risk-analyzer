const data = require('./sampleWalletData.json');
const { analyzeTransactions } = require('./transactionParser');
const { calculateRisk } = require('./riskEngine');

function runAnalysis() {

  console.log("Analyzing wallet:", data.wallet);

  const metrics = analyzeTransactions(data.transactions);

  const result = calculateRisk(metrics);

  console.log("\nTransaction Metrics:");
  console.log(metrics);

  console.log("\nRisk Analysis Result:");
  console.log(result);

}

runAnalysis();
