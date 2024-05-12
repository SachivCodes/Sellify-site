pay-now-btn.addEventListener('click', function () {
      paymentScreen.style.display = 'block';
    });
  
    make-payment-btn.addEventListener('click', function () {
      paymentScreen.style.display = 'none';
      alert('PAYMENT SUCCESSFUL!');
    });