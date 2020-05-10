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
    const [editMode, setEditMode] = useState(false);
    const [cardId, setCardId] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setLoading(false);
                    setTodo(todos);
                }, 1000)
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
    }

    function changeTodo(position, editedCard) {
        todos.splice(position, 1, editedCard); // position = integer; editCard = {}
        setTodo(todos);
    }

    function modalShow(id) {
        setOpenModal(!isOpenModal);
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
                        : <TodoList
                            todos={todos}
                            setEditMode={setEditMode}
                            modalShow={modalShow}
                        />
                    }
                </div>
                {isOpenModal && (
                    <Modal
                        modalShow={modalShow}
                        editMode={editMode}
                        todo={todos[cardId - 1]}
                        changeTodo={changeTodo}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
