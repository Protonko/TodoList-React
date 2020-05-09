import React, {useEffect, useState} from 'react';
import Navbar from '@Components/Navbar/Navbar';
import AddTodoCard from '@Components/AddTodoCard/AddTodoCard';
import TodoList from '@Components/TodoList/TodoList';
import LoaderCat from '@Components/SvgIcons/LoaderCat';
import Modal from '@Components/Modal/Modal';

function App() {
    const [todos, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenModal, setOpenModal] = useState(false);
    const [cardId, setCardId] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=5')
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
                id: todos.length + 1,
                title,
                body: 'Write description here',
            }
        ]))

        console.log(todos)
    }

    function modalShow(id) {
        isOpenModal
            ? setOpenModal(false)
            : setOpenModal(true);
        setCardId(id);
    }
    return (
        <div className="App">
            <header className="header">
                <Navbar/>
            </header>
            <main>
                <div className="container">
                    <AddTodoCard addTodo={addTodo}/>
                    {loading
                        ? <LoaderCat/>
                        : <TodoList todos={todos} modalShow={modalShow}/>
                    }
                </div>
                {isOpenModal && (
                    <Modal modalShow={modalShow} todo={todos[cardId - 1]}/>
                )}
            </main>
        </div>
    );
}

export default App;
