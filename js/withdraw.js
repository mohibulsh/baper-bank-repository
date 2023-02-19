

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawValue = takeInputGiveValue('withdraw-field')
    const withdrawSumValue = takeIdGiveSum('withdraw-sum');
    const withdrawTotalAmound = withdrawSumValue + withdrawValue;
    setNewValue('withdraw-sum',withdrawTotalAmound);
    
    const withdrawBalance = takeIdGiveSum('blance-sum')
    const withdrawFoReduceBalance = withdrawBalance - withdrawValue;
    setNewValue('blance-sum',withdrawFoReduceBalance);
})