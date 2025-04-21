document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username && password) {
    // Redirect to dashboard when both fields are filled
    window.location.href = '/admin/admin.html';
  }
});