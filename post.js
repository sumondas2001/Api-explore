function loadPost() {
     fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => displayPost(data))
}
function displayPost(posts) {
     const postsContiner = document.getElementById('posts-continer');

     for (const post of posts) {
          const postDiv = document.createElement('div');
          postDiv.classList.add('post');
          postDiv.innerHTML = `
               <h4>Usre- ${post.userId}</h4>

               <h5>Post- ${post.title}</h5>

               <p>post Description- ${post.body}</p>

          `;
          postsContiner.appendChild(postDiv);
     }

}
loadPost()