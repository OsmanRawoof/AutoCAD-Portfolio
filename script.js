document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for your message. Please contact Osman directly via phone or email.');
      form.reset();
    });
  }
});
