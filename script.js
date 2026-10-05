// Progressive enhancement: all content and project details work without JavaScript.
document.getElementById('year').textContent = new Date().getFullYear();
function revealLinkedProject() {
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); }
  catch { return; }
  const target = document.getElementById(id);
  const project = target && (target.classList.contains('project') ? target : target.closest('.project'));
  if (project && project.classList.contains('project')) {
    const details = project.querySelector('details');
    if (details) details.open = true;
  }
}
window.addEventListener('hashchange', revealLinkedProject);
revealLinkedProject();
