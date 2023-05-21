const subtractNumbers = () => {
            
    const predefinedNumbersArea = document.getElementById('predefinedNumbersArea');
    predefinedNumbersArea.innerHTML = '';

    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    if (isNaN(inputNumber)) return;  

    let predefinedNumbers = [10000, 5000, 1000,inputNumber + 1000, inputNumber + 500,  inputNumber + 250, inputNumber + 100, inputNumber + 50 , inputNumber + 20 , inputNumber + 10];

    predefinedNumbers.forEach((num, index) => {
        let change = num - inputNumber;
        if(change < 0) return;  
        
    const row = document.createElement('div');
     row.className = 'row';
    const col1 = document.createElement('div');
col1.className = 'col-6';
const card1 = document.createElement('div');
card1.className = 'card';
const cardBody1 = document.createElement('div');
cardBody1.className = 'card-body';
const h5_1 = document.createElement('h5');
h5_1.textContent = num;
h5_1.className = 'card-title';
cardBody1.appendChild(h5_1);
card1.appendChild(cardBody1);

const col2 = document.createElement('div');
col2.className = 'col-6';
const card2 = document.createElement('div');
card2.className = 'card';
const cardBody2 = document.createElement('div');
cardBody2.className = 'card-body';
const h5_2 = document.createElement('h5');
h5_2.textContent = num - inputNumber;
h5_2.className = 'card-title';
cardBody2.appendChild(h5_2);
card2.appendChild(cardBody2);
h5_2.textContent = change;  

if (index == 0) {
const cardHeader1 = document.createElement('div');
cardHeader1.className = 'card-header';
cardHeader1.textContent = '支払金額';
card1.prepend(cardHeader1);

const cardHeader2 = document.createElement('div');
cardHeader2.className = 'card-header';
cardHeader2.textContent = 'おつり';
card2.prepend(cardHeader2);
}

col1.appendChild(card1);
col2.appendChild(card2);
row.appendChild(col1);
row.appendChild(col2);

predefinedNumbersArea.appendChild(row);


});


}