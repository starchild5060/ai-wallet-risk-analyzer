function analyzeTransactions(transactions) {

  let totalVolume = 0;
  let flaggedInteractions = 0;
  let unknownInteractions = 0;

  transactions.forEach(tx => {

    totalVolume += tx.amount;

    if (tx.counterparty === "flagged_wallet") {
      flaggedInteractions++;
    }

    if (tx.counterparty === "unknown") {
      unknownInteractions++;
    }

  });

  return {
    totalVolume,
    flaggedInteractions,
    unknownInteractions
  };

}

module.exports = { analyzeTransactions };
