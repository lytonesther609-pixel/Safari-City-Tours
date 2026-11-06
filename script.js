// Shared JavaScript for Safari & City Tours
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

const contactForm = document.querySelector('#contactForm');
const successModal = document.querySelector('#successModal');
const closeModal = document.querySelector('#closeModal');

if (contactForm && successModal) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    successModal.classList.add('show');
    contactForm.reset();
  });
}
if (closeModal && successModal) {
  closeModal.addEventListener('click', () => successModal.classList.remove('show'));
}
if (successModal) {
  successModal.addEventListener('click', (event) => {
    if (event.target === successModal) successModal.classList.remove('show');
  });
}
