const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const billAmount = Number(document.getElementById('billAmount').value);
  const tipPercent = Number(document.getElementById('tipPercent').value);

  const tip = document.getElementById('tip');
  const total = document.getElementById('total');

  const calculatedTip = billAmount * tipPercent / 100;
  const calculatedTotal = billAmount + calculatedTip;

  tip.textContent = calculatedTip.toFixed(2);
  total.textContent = calculatedTotal.toFixed(2);
});
