document.addEventListener('DOMContentLoaded', () => {
    const bills = [275, 40, 430];

    bills.forEach(bill => {
        const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
        const total = bill + tip;

        const resultText = `The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`;
        console.log(resultText);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML += `<p>${resultText}</p>`;
    });
});
