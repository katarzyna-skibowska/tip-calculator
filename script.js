const billInput = document.getElementById('bill-value')
const tipPercent = document.querySelectorAll('.tip-button')
const peopleInput = document.getElementById('people-value')

const calculateBtn = document.querySelector('.sum-button')
const resetBtn = document.querySelector('.reset-button')

const tipResult = document.getElementById('total-tip')
const totalResult = document.getElementById('total-amount')


billInput.addEventListener('input', typeBillValue)
peopleInput.addEventListener('input', typePeopleValue)
tipPercent.forEach(function(percent){
percent.addEventListener('click', changeButtonStyle)
percent.addEventListener('click', chooseTipValue)
})

calculateBtn.addEventListener('click', onClickCalculateResult)
resetBtn.addEventListener('click', reset)
resetBtn.addEventListener('click', resetBtnChangeStyle)

const billInitialValue = 0
const tipInitialValue = 0
const peopleInitialValue = 1

tipResult.innerText = '$' + (0.00).toFixed(2)
totalResult.innerText = '$' + (0.00).toFixed(2)

function typeBillValue(event) {
    bill = event.target.value;
if (billInput.value == null || billInput.value <= 0 && peopleInput.value == null || peopleInput.value <= 0)
{
    calculateBtn.disabled = true
} else {
    calculateBtn.disabled = false
}}

function typePeopleValue(event) {
    people = event.target.value;
if (billInput.value == null || billInput.value <= 0 && peopleInput.value == null || peopleInput.value <= 0)
{
    calculateBtn.disabled = true
} else {
    calculateBtn.disabled = false
}}

function chooseTipValue(event){  
    tipPercent.forEach(function(percent){
        if(event.target.innerText == percent.innerText){
            tip = parseFloat(percent.innerText) /100
        }
})}

function onClickCalculateResult(){
        let tipAmount = (bill * tip) / people
        let total = (bill / people) + tipAmount
        tipResult.innerText = '$' + tipAmount.toFixed(2)
        totalResult.innerText = '$' + total.toFixed(2)
    }

function changeButtonStyle(event) {
    tipPercent.forEach(function(percent){
        percent.style.backgroundColor = null 
        if(event.target.innerText == percent.innerText){
            percent.style.backgroundColor = 'hsl(184, 14%, 56%)'
        }
    })
}

function resetBtnChangeStyle(event) {
    tipPercent.forEach(function(percent){
        percent.style.backgroundColor = null 
    })
}

function reset (){
    if(billInput.value !== null || tipPercent !== null || peopleInput !== null ){
    resetBtn.disabled = false
    billInput.value = billInitialValue
    peopleInput.value = peopleInitialValue
    tipPercent.value = tipInitialValue
    tipResult.innerHTML = '$0.00'
    totalResult.innerHTML = '$0.00'
    } 
    else {
        resetBtn.disabled = true
    }
}
