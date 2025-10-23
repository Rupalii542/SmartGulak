// ======== Sidebar Toggle ========
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      toggleBtn.querySelector('i').classList.toggle('fa-angle-right');
      toggleBtn.querySelector('i').classList.toggle('fa-angle-left');
    });
  }

  // ======== Username Display ========
  const username = localStorage.getItem('username');

  // Redirect if not logged in
  if (!username && window.location.pathname !== '/index.html') {
    window.location.href = 'index.html';
  }

  // Set username in sidebar
  const usernameElem = document.getElementById('username');
  if (usernameElem) {
    usernameElem.textContent = username || 'User';
  }

  // Set username in page (optional)
  const userHomeElem = document.getElementById('userHome');
  if (userHomeElem) {
    userHomeElem.textContent = username || 'User';
  }
});
