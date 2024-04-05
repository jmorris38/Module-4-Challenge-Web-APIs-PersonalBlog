// Function to dynamically add blog posts to the HTML
function displayAllBlogs() {
    const blogContainer = document.querySelector('.blog-container');
  
    // Clear existing blog posts to avoid duplicates
    blogContainer.innerHTML = '';
  
    // Retrieve blog data from local storage
    const getData = localStorage.getItem('blogData');
    let blogEntries = [];
  
    if (getData) {
      blogEntries = JSON.parse(getData);
    }
  
    // Loop through blog entries and create HTML elements for each blog post
    blogEntries.forEach(blogData => {
      const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');
  
      const title = document.createElement('div');
      title.classList.add('blog-title');
      title.textContent = `Title: ${blogData.Title}`;
  
      const content = document.createElement('div');
      content.classList.add('blog-content');
      content.textContent = `Content: ${blogData.Content}`;
  
      const author = document.createElement('div');
      author.classList.add('blog-author');
      author.textContent = `Author: ${blogData.Author}`;
  
      // Append title, content, and author to blog post
      blogPost.appendChild(title);
      blogPost.appendChild(content);
      blogPost.appendChild(author);
  
      // Append blog post to blog container
      blogContainer.appendChild(blogPost);
    });
  }
  
  // Call displayAllBlogs function when the page loads
  window.onload = displayAllBlogs;
  