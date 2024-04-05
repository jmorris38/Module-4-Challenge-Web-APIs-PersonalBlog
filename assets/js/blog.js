const themeBtn = document.querySelectorAll("#theme");
const closeButton = document.querySelector("#back");
const body = document.querySelector('body');
let mode = 'light';

//on click listener for theme button to switch between darkmode and lightmode
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

//Back button to go back on the blog posting form page
closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});
