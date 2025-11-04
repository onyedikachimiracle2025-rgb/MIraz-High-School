function toggleMenu(btn) {
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !open);
  document.getElementById('mobile-menu').style.display = open ? 'none' : 'block';
}

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }

  alert(`Thanks, ${name}! Your message was received. We’ll get back to you at ${email}.`);
  document.getElementById('contactForm').reset();
}

document.getElementById('year').textContent = new Date().getFullYear();
