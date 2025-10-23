// main.js
fetch('sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebarContainer').innerHTML = data;

    const username = localStorage.getItem('username') || 'User';
    const usernameElem = document.getElementById('username');
    if (usernameElem) usernameElem.textContent = username;

    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        toggleBtn.querySelector('i').classList.toggle('fa-angle-right');
        toggleBtn.querySelector('i').classList.toggle('fa-angle-left');
      });
    }
  });
