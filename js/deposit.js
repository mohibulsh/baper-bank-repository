// back button link in deposit

document.getElementById('back-btn').addEventListener('click',function(){
    window.location.href ='login.html'
})

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositValue = takeInputGiveValue('deposit-field');
    const depositSumAmount = takeIdGiveSum('deposit-sum')
    const totalDepositValue = depositSumAmount + depositValue;  
   setNewValue('deposit-sum',totalDepositValue);

    const dipositBalance =takeIdGiveSum('blance-sum');
    const newDepositBalance = dipositBalance + totalDepositValue;
    setNewValue('blance-sum',newDepositBalance);
});