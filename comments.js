
function comments (){
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(res => res.json())
     .then(date => displayComments(date))

}
function displayComments(comments){
     const commentsContinner =document.getElementById('comments-continner');
     for(const comment of comments ){
     const divComments = document.createElement('div');
          divComments.classList.add('comments')
          divComments.innerHTML=`
          <h2>post Id ${comment.postId} :</h2>
          <h3>Name :  ${comment.name}</h3>
          <h4>email Id :  ${comment.email}</h4>
          <h4>body:  ${comment.body}</h4>
          `;

          commentsContinner.appendChild(divComments)
     }
}
comments()