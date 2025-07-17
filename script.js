const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    formMsg.textContent = 'Please fill out all fields.';
    formMsg.style.color = 'crimson';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMsg.textContent = 'Please enter a valid email address.';
    formMsg.style.color = 'crimson';
    return;
  }

  formMsg.textContent = 'Message sent successfully!';
  formMsg.style.color = '#27ae60';

  // Reset form after success
  form.reset();
});
