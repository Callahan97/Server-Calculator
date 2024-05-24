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
    
    operatorButtons.forEach(button => {
    button.addEventListener('click', () => handleOperatorClick(button));
    });

    const clearForm = () => {
    document.getElementById('numOne').value = '';
    document.getElementById('numTwo').value = '';
    selectedOperator = null;
    operatorButtons.forEach(btn => btn.classList.remove('selected'));
    };

    // Add event listener to the clear button
    clearButton.addEventListener('click', clearForm);

     // Function to handle form submission
     const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
       
        const number1 = document.getElementById('numOne').value;
        const number2 = document.getElementById('numTwo').value;
       
        if (!selectedOperator) {
        alert('Please select an operator');
        return;
        }
})