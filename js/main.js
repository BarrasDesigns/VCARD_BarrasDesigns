/* Open modal by ID */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

/* Close modal by ID */
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

/* Legacy support functions */
function toggleModal1() { openModal('modalContainer--Voice'); }
function toggleModal2() { openModal('modalContainer--Desarrollo'); }
function toggleModal3() { openModal('modalContainer--Articulos'); }
function toggleModal4() { openModal('modalContainer--Customer'); }

/* Project Modal Pop-up Handler */
function openProjectModal(title, description, link, category) {
  document.getElementById('projectTitle').innerText = title;
  document.getElementById('projectDesc').innerText = description;
  document.getElementById('projectCategory').innerText = category;

  const btn = document.getElementById('projectLinkBtn');
  btn.href = link;

  openModal('modalProject');
}

/* Share Modal & QR Generator */
function openShareModal() {
  openModal('modalShare');
}

/* Copy Link to Clipboard */
function copyVCardLink() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  alert('¡Enlace de la VCard copiado al portapapeles!');
}

/* Dynamic VCF vCard Downloader */
function downloadVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Barras Designs',
    'ORG:Barras Designs',
    'TITLE:Soluciones Digitales & Desarrollo Web',
    'TEL;TYPE=CELL,VOICE:+528115028945',
    'EMAIL;TYPE=INTERNET,PREF:contacto@barras-designs.com.mx',
    'URL:https://barras-designs.com.mx',
    'NOTE:Desarrollo web, VCards Digitales, Voice Over y Artículos Personalizados.',
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'Barras_Designs.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ESC Key Listener to Close All Modals */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('[id^="modal"]').forEach(el => el.classList.add('hidden'));
  }
});
