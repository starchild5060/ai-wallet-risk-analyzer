function calculateRisk(metrics) {

  let riskScore = 0;
  let flags = [];

  if (metrics.flaggedInteractions > 0) {
    riskScore += 40;
    flags.push("Interaction with flagged wallet");
  }

  if (metrics.unknownInteractions > 2) {
    riskScore += 20;
    flags.push("Multiple unknown counterparties");
  }

  if (metrics.totalVolume > 10) {
    riskScore += 20;
    flags.push("High transaction volume");
  }

  if (riskScore === 0) {
    flags.push("No suspicious patterns detected");
  }

  return {
    riskScore,
    flags
  };

}

module.exports = { calculateRisk };
