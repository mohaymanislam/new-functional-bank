/* function doubleIt (num){
  const result = num * 2;
  return result;
}
const  fiveDouble = doubleIt(7)
const sevenDouble = doubleIt(5) */

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
   /*  const depositInput = document.getElementById('deposit-input');
    const depositAmountText  = depositInput.value;
    const depositAmount = parseFloat(depositAmountText) */
    


// get  and update deposit total
 /*    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText)

    depositTotal.innerText = previousDepositTotal + depositAmount; */

    
    
//   update blanc
      /* const balancesTotal = document.getElementById('balance-total')
      const balancesTotalText = balancesTotal.innerText;
      const previousBalancesTotal = parseFloat(balancesTotalText);
      balancesTotal.innerText = previousBalancesTotal + depositAmount; */
      const depositAmount = getInputValue('deposit-input')
      if(depositAmount > 0){
        updateTotalFiled('deposit-total',depositAmount)
        updateBalance(depositAmount, true)
      }
      

    
})

document.getElementById('withdraw-button').addEventListener('click', function(){
 /*  const withdrawInput = document.getElementById('withdraw-input')
  const withdrawAmountText = withdrawInput.value;
  const withdrawAmount= parseFloat(withdrawAmountText); */

  
// get and update withdraw total 
  /* const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

  

 /*  const balancesTotal = document.getElementById('balance-total');
  const balancesTotalText = balancesTotal.innerText;
  const previousBalancesTotal = parseFloat(balancesTotalText);
  balancesTotal.innerText = previousBalancesTotal - withdrawAmount; */
  // withdrawInput.value = '' 

  
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

