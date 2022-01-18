window.addEventListener("load", function() {
    const form = document.getElementById('companyInterestForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      /*Comment out later*/
      .then(() => {
        /*alert("Success!");*/
        form.reset();
        return false;
      })
    });
  });

  window.addEventListener("load", function() {
    const form = document.getElementById('studentInterestForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      /*Comment out later*/
      .then(() => {
        /*alert("Success!");*/
        form.reset();
        return false;
      })
    });
  });

  window.addEventListener("load", function() {
    const form = document.getElementById('newsletter');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      /*Comment out later*/
      .then(() => {
        /*alert("Success!");*/
        form.reset();
        return false;
      })
    });
  });