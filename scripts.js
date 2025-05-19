const toggleBtn = document.getElementById('toggleTheme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Mode Clair';
  } else {
    toggleBtn.textContent = '🌙 Mode Sombre';
  }
});
