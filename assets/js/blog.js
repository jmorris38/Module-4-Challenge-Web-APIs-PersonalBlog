const themeBtn = document.querySelectorAll("#theme");
const closeButton = document.querySelector("#back");
const body = document.querySelector('body');
let mode = 'light';

themeBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    if (mode === 'dark') {
      mode = 'light';
      body.setAttribute('id', 'light');
    } else {
      mode = 'dark';
      body.setAttribute('id', 'dark');
    }
  });
});

closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});
