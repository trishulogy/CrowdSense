document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username && password) {
    // Redirect to dashboard when both fields are filled
    window.location.href = '/other/index.html';
  }
});

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function scrollImages(direction) {
  const track = document.getElementById("imageTrack");
  const scrollAmount = 320; // image width + margin

  if (direction === "left") {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}
