function todosLoad(){
     fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res => res.json())
     .then(data => displayTodos(data))
}

function displayTodos(todo){
     const todosContinner = document.getElementById('todos-continner');

     for(const todos of todo){
          console.log(todos)
          const divTodos = document.createElement('div');
          divTodos.classList.add('todos')
          divTodos.innerHTML=`
           <h2>Id : ${todos.userId}</h2>
           <h4>Title : ${todos.title}</h4>
           <h5>completed : ${todos.completed}</h5>
           
          `;
          todosContinner.appendChild(divTodos)
     }
}

todosLoad()