console.log('client.js is sourced!');

document.addEventListener('DOMContentLoaded', ()=>{
const form =  document.getElementById('calculatorForm');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clearButton');
    let selectedOperator = null;

    const handleOperatorClick = (button) => {
        selectedOperator = button.value;

        console.log(selectedOperator)
        operatorButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
};
})