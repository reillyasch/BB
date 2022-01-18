window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
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
  
function submitForm(){
    var frm = document.getElementsByName('interestForm')[0];
    frm.submit();
    frm.reset();
    return false;

}