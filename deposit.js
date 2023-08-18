/**
 * 1. add event listener to the deposit button
 * 2. get deposit amount from input field
 * 2.5. convert string deposit amount to a number type
 *
 * 3. clear the deposit input field after getting the value
 * 4. get the previous deposit total
 * 5. calculate new deposit total and set the value to the deposit total
 * 6. get current balance total
 * 7. calculate the new balance and set it to the balance total element
 */

// step 1: ADD event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step 2: get the deposit amount from the deposit input field
  //   for input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //   step 3: get the current deposit total
  // for non input(element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //   step 4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //   step 5:get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   step: 6 calculate current total balance
  const currentTotalBalance = previousBalanceTotal + newDepositAmount;

  //   set the balance total
  balanceTotalElement.innerText = currentTotalBalance;
  //   step : 7 clear the deposit field
  depositField.value = "";
});
