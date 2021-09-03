let current_user = localStorage.getItem('user');

if (!current_user) {
  window.location.href = 'http://127.0.0.1:5500/login.html';
}

document.getElementById('ask-help-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const grade = Number(e.target.elements.grade.value);
  const inQueue = JSON.parse(localStorage.getItem('helpQueue')) || [];
  inQueue.push({ user: current_user, grade: grade });
  localStorage.setItem('helpQueue', JSON.stringify(inQueue));

  window.location.href = 'http://127.0.0.1:5500/waiting.html';
});
