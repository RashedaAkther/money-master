let income = 0;
function calculation() {
  const income = document.getElementById("income-field").value;
  const food = document.getElementById("food-field").value;
  const rent = document.getElementById("rent-field").value;
  const cloths = document.getElementById("cloths-field").value;
  const totalExpense = parseInt(food) + parseInt(rent) + parseInt(cloths);
  document.getElementById("total-expense").innerText = totalExpense;

  document.getElementById("total-expense").innerText = totalExpense;
  document.getElementById("balance").innerText =
    parseInt(income) - totalExpense;
  //   alert(totalExpense);
}

function saveBtn() {
  const savingAmount = parseInt(document.getElementById("save").value) / 100;
  const savingAmountBalance = parseFloat(document.getElementById("balance").innerText) * savingAmount;
    document.getElementById("saving-amount").innerText = savingAmountBalance;
    document.getElementById("remaining-balance").innerText =
      document.getElementById("balance").innerText - savingAmountBalance;
  
}
