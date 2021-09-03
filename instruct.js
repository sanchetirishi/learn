let current_user = localStorage.getItem('user');

if (!current_user) {
  window.location.href = 'http://127.0.0.1:5500/login.html';
}

document.getElementById('instruct-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const maxGrade = Number(e.target.elements.maxGrade.value);
  const meetLink = e.target.elements.meetLink.value;

  const instructQueue = JSON.parse(localStorage.getItem('instructQueue')) || [];

  debugger

  instructQueue.push({ user: current_user, maxGrade: maxGrade, meetLink: meetLink });

  localStorage.setItem('instructQueue', JSON.stringify(instructQueue));
  window.location.href = 'http://127.0.0.1:5500/success.html';
});
