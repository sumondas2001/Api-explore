function loadData2(){
     fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(resp => resp.json())
     .then(data => console.log(data))
}

function loadData3(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(resp => resp.json())
     .then(data => console.log(data))
}

function usersPost(){
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(post => users(post))
}
function users (data){
     console.log(data);

}