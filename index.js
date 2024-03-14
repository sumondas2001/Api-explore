// function usersData(){
//  fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json())
//  .then(data => displayUsers(data))
// }
// function displayUsers(data){
//     const ul = document.getElementById('users-ul');

//     for(const users of data){
//      // console.log(users.name)
//      const li = document.createElement('li');
//      li.innerText = users.name;
//      ul.appendChild(li)
//     }
// }


function usersData(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => displayUsers(data))
}
function displayUsers(data){
     const ul = document.getElementById('users-ul');
     for(const users of data){
          // console.log(users.name)
          let usersName = users.name;
          
          const li = document.createElement('li');
          li.innerText = usersName;
          ul.appendChild(li);
     }
}