import React, {useEffect, useState} from 'react';
import Header from '@Components/Common/Header';
import AddTodoCard from '@Components/AddTodoCard/AddTodoCard';
import TodoList from '@Components/TodoList/TodoList';
import LoaderCat from '@Components/Common/SvgIcons/LoaderCat';
import Modal from '@Components/Modal/Modal';

function App() {
    const [todos, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenModal, setOpenModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [cardId, setCardId] = useState(0);

    useEffect(() => {
        fetch('http://egorermolaev.ru/todos.json')
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
                checkboxes: [],
            }
        ]))
    }

    function changeTodo(position, editedCard) {
        todos.splice(position, 1, editedCard); // position = integer; editCard = {}
    }

    function modalShow(id) {
        setOpenModal(!isOpenModal);
        setCardId(id);
    }

    function appendCheckbox(arr) {
        arr.push({title: 'Write text here', completed: false});
    }

    return (
        <div className="App">
            <Header />
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
                        appendCheckbox={appendCheckbox}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
