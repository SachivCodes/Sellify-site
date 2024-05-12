document.addEventListener('DOMContentLoaded', function () {
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const quantityInputs = document.querySelectorAll('.quantity');
    const productPrices = document.querySelectorAll('.product-price');
    const totalPrices = document.querySelectorAll('.total-price');
    const cartTotalPrice = document.querySelector('.cart-total-price');1
    const payNowBtn = document.querySelector('.pay-now-btn');
    const paymentScreen = document.querySelector('.payment-screen');
    const paymentAmount = document.querySelector('.payment-amount');
    const paymentMethods = document.querySelector('.payment-methods');
    const makePaymentBtn = document.querySelector('.make-payment-btn');
  
    minusBtns.forEach(function (minusBtn) {
      minusBtn.addEventListener('click', function () {
        const quantityInput = minusBtn.parentElement.querySelector('.quantity');
        const currentQuantity = parseInt(quantityInput.textContent);
        if (currentQuantity > 1) {
          quantityInput.textContent = currentQuantity - 1;
          updateTotal();
        }
      });
    });
  
    plusBtns.forEach(function (plusBtn) {
      plusBtn.addEventListener('click', function () {
        const quantityInput = plusBtn.parentElement.querySelector('.quantity');
        const currentQuantity = parseInt(quantityInput.textContent);
        quantityInput.textContent = currentQuantity + 1;
        updateTotal();
      });
    });
  
    function updateTotal() {
      let total = 0;
      quantityInputs.forEach(function (quantityInput, index) {
        const productPrice = parseFloat(productPrices[index].textContent.slice(1));
        total += productPrice * parseInt(quantityInput.textContent);
      });
      cartTotalPrice.textContent = '$' + total;
      paymentAmount.textContent = '$' + total;
    }
  
    payNowBtn.addEventListener('click', function () {
      paymentScreen.style.display = 'block';
    });
  
    makePaymentBtn.addEventListener('click', function () {
      paymentScreen.style.display = 'none';
      alert('PAYMENT SUCCESSFUL!');
    });
  });