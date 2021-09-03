
let current_user = localStorage.getItem('user');

if (current_user) {
  document.getElementById('logged-in').innerHTML = `You are logged in as <u>${current_user}</u>`;
  document.getElementById('login-link').style.display = 'none';
} else {
  document.getElementById('logged-in').innerHTML = `You are not logged in`;
  document.getElementById('logout-link').style.display = 'none';
  document.getElementById('profile-link').style.display = 'none';
  document.getElementById('history').style.display = 'none';
}

document.getElementById('logout-link').addEventListener('click', (e) => {
  localStorage.removeItem('user');
  window.location.reload();
});

console.log(current_user);
