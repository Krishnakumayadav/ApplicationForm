const form = document.getElementById('applicationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  let valid = true;
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';

  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
    valid = false;
  }

  if (!email.includes('@')) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    valid = false;
  }

  if (phone.length < 10 || isNaN(phone)) {
    document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});