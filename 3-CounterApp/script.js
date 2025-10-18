let value = document.getElementById('count');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let resetBtn = document.getElementById('reset');


incrementBtn.addEventListener('click', function() {
  let count = Number(value.textContent);
  count++;
  value.textContent = count;
});

decrementBtn.addEventListener('click', function() {
  let count = Number(value.textContent);
  count--;
  value.textContent = count;
});     

resetBtn.addEventListener('click', function() {
  value.textContent = 0;
}); 