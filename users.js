function usersloead(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json() )
     .then(data => usersDisplay(data))
}
function usersDisplay(users){
     const usersContinner= document.getElementById('users-continner');
     for(const user of users){
          
          const divUsers = document.createElement('div');

          divUsers.classList.add('users')
          divUsers.innerHTML=`
          <h1>ID: ${user.id}</h1>
          <h2>Name: ${user.name}</h2>
          <h3>Usres Name: ${user.username}</h3>
          <h4>Email ID: ${user.email}</h4>
          <h4>Address: ${user.address}</h4>
          <h4>Website: ${user.website}</h4>
          <h4>Phone: ${user.phone}</h4>
          <h4>company: ${user.company}</h4>
          `;
          usersContinner.appendChild(divUsers);
     }
}
usersloead()