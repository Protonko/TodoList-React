import React, {useEffect, useState} from 'react';
import Navbar from '@Components/Navbar/Navbar';
import AddTodoCard from '@Components/AddTodoCard/AddTodoCard';
import TodoList from '@Components/TodoList/TodoList';
import LoaderCat from '@Components/SvgIcons/LoaderCat';

function App() {
    const [todos, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setLoading(false);
                    setTodo(todos);
                }, 2000)
            })
    }, []);

    function addTodo(title) {
        setTodo(todos.concat([
            {
                title,
                description: 'Write description here',
                id: Date.now()
            }
        ]))
    }

  return (
    <div className="App">
      <header className="header">
          <Navbar />
      </header>
      <main>
          <div className="container">
              <AddTodoCard addTodo={addTodo} />
              {loading
                 ? <LoaderCat />
                 : <TodoList todos={todos} />
              }
          </div>
      </main>
    </div>
  );
}

export default App;
