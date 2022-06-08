window.addEventListener("load", function() {
  const form = document.getElementById('contactForm');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      const inputs = document.querySelectorAll('#name, #email, #comments')
      inputs.forEach(input => {
        input.value='';
      });
    });
  });
});