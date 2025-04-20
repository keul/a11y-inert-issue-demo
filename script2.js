document.addEventListener("DOMContentLoaded", function () {

  function awaitNetworkCheck() {
    document.querySelectorAll('[data-fields-group]').forEach(function (element) {
      element.classList.add('inert');
    });
    document.getElementById('message').innerHTML = 'Form is updating…';
    document.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');

    setTimeout(function () {
      document.querySelectorAll('[data-fields-group]').forEach(function (element) {
        element.classList.remove('inert');
      });

      // Check for missing required fields
      if (document.querySelectorAll('input[type="checkbox"]:checked').length === 0) {
        document.getElementById('message').innerHTML = 'Please check all required fields.';
      } else {
        document.getElementById('message').innerHTML = '';
        document.querySelector('button[type="submit"]').removeAttribute('disabled');
      }

    }, Math.floor(Math.random() * (3000 - 200 + 1)) + 200);
  }

  document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        console.log('checked')
      } else {
        console.log('unchecked')
      }
      awaitNetworkCheck();
    })
  })
})