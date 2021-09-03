document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  localStorage.setItem('user', email);

  console.log(localStorage.getItem('user'))

  window.location.href = 'http://127.0.0.1:5500/';
});
