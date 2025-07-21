//In this workshop, you will continue to learn how to work with conditionals by building a loan qualification checker app.You will learn more about if statements, and how to use comparison operators and multiple conditions in an if statement.

    const minIncomeForDuplex = 60000;
    const minCreditScoreForDuplex = 700;
    const minIncomeForCondo = 45000;
    const minCreditScoreForCondo = 680;
    const minIncomeForCar = 30000;
    const minCreditScoreForCar = 650;


function getLoanMessage ( annualIncome,creditScore) {
if(annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex)
return  "You qualify for a duplex, condo, and car loan.";
else if(annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo){
    return "You qualify for a condo and car loan."
}
else if(annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar){
    return "You qualify for a car loan."
}
else if (annualIncome < minIncomeForCar && creditScore < minCreditScoreForCar){
    return "You don't qualify for any loans."
}
}
   let duplexLoanMsg = getLoanMessage(85000,850);
    let condoLoanMsg = getLoanMessage(65000, 690);
    let carLoanMsg = getLoanMessage(45000, 660);
    let noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);