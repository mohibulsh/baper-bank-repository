function takeInputGiveValue (getInput){
    const depositField = document.getElementById(getInput);
    const depositFieldValueString = depositField.value ;
    const depositFieldValue = parseFloat(depositFieldValueString);
    depositField.value ='';
    return depositFieldValue;
};

// sum function

function takeIdGiveSum(takeSum){
    const takeGivenSum = document.getElementById(takeSum);
    const takeGivenSumString = takeGivenSum.innerText;
    const takeGivenSumValue = parseFloat(takeGivenSumString);
    return takeGivenSumValue;
}
// set new value function
function setNewValue(Element,value){
          const setNewValueElement = document.getElementById(Element);
          setNewValueElement.innerText= value;
}