
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
      const inputAmountText  = inputField.value;
      const amountValue = parseFloat(inputAmountText);
      //    clear input field
      inputField.value = '';
      return amountValue;  
  }
  function updateTotalFiled(totalFieldId,amount){
    
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    
    totalElement.innerText = previousTotal + amount;
  }
  function getCurrentBalance(){
    const balancesTotal = document.getElementById('balance-total')
    const balancesTotalText = balancesTotal.innerText;
    const previousBalancesTotal = parseFloat(balancesTotalText);
    return previousBalancesTotal;
  }
  
  
  function updateBalance(amount, isAdd){
        const balancesTotal = document.getElementById('balance-total')
        /* const balancesTotalText = balancesTotal.innerText;
        const previousBalancesTotal = parseFloat(balancesTotalText); */
        const previousBalancesTotal = getCurrentBalance()
        if(isAdd == true){
          balancesTotal.innerText = previousBalancesTotal + amount;
        }
        else{
          balancesTotal.innerText = previousBalancesTotal - amount;
          
        }
  }
  document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input')
    if(depositAmount > 0){
      updateTotalFiled('deposit-total',depositAmount)
      updateBalance(depositAmount, true)
    }
    
})  
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input')
  const currentBalance = getCurrentBalance()

  if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalFiled('withdraw-total', withdrawAmount)
  updateBalance(withdrawAmount, false)
  }
  if(withdrawAmount > currentBalance){
    console.log('you canot ')
  }
})