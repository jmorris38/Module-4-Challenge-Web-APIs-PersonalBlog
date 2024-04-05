const themeBtn = document.querySelectorAll("#theme");
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

//form attribute to submit the blog content
const submitButton = document.querySelector("#submission");
const author = document.querySelector("#un");
const title = document.querySelector("#t1");
const content = document.querySelector("#c1");

//getting the data from locally to Parse data in JSON in blogEntries Array
const getData = localStorage.getItem('blogData');
let blogEntries = []


if (getData) {
 blogEntries = JSON.parse(getData)
}

//on Click listener to get the content filled on the form by the user
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  
  if (author.value && title.value && content.value) {
    const blogData = {
      Author: author.value.trim(),
      Title: title.value.trim(),
      Content: content.value.trim(),
    };

    // and store it in the blogEntries Array 
    blogEntries.push(blogData)
    localStorage.setItem("blogData", JSON.stringify(blogEntries));

    //Loads blogs page
    showAllBlogs();
  } else {
    alert("Please enter all fields");
  }
});

// function to load blog.html 
function showAllBlogs() {
  window.location.href = "blog.html";
}
