// Formulaires
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Merci ! Nous avons reçu votre message/devis.');
    form.reset();
    const modal = bootstrap.Modal.getInstance(document.querySelector('#devisModal'));
    if (modal) modal.hide();
  });
});

// Bascule clair/sombre
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  } else {
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  }
});

// Détection automatique au chargement
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
}
