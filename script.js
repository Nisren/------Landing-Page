// فتح النموذج عند الضغط على Order Now
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('order-modal').style.display = 'flex';
});

// إغلاق النموذج
document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('order-modal').style.display = 'none';
  resetForm();
});

// إرسال الطلب
document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const flavor = document.getElementById('flavor').value;

  const message = document.getElementById('response-message');

  if (name && phone && flavor) {
    message.textContent = `✅ Thank you, ${name}! Your ${flavor} juice order has been received. 📦`;
    document.getElementById('order-form').reset();
  } else {
    message.textContent = "❌ Please fill all fields correctly.";
    message.style.color = "red";
  }
});



