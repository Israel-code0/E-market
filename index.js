let count = 0;
let price = 5899.00;

document.getElementById('Increase').addEventListener('click', function() {
  count += 1;
  document.getElementById('count').innerHTML = count;
  let totalPrice = price * count;
  document.querySelector('.price p b').innerHTML = `₦${totalPrice.toFixed(2)}`;
});

document.getElementById('Decrease').addEventListener('click', function() {
  if (count > 0) {
    count -= 1;
    document.getElementById('count').innerHTML = count;
    let totalPrice = price * count;
    document.querySelector('.price p b').innerHTML = `₦${totalPrice.toFixed(2)}`;
  }
});

document.querySelector('.Reset').addEventListener('click', function() {
  count = 0;
  document.getElementById('count').innerHTML = count;
  document.querySelector('.price display').innerHTML = `₦${price.toFixed(2)}`;
});

