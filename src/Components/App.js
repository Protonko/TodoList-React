import React, {useEffect, useState} from 'react';
import Header from '@Components/Common/Header';
import AddTodoCard from '@Components/AddTodoCard/AddTodoCard';
import TodoList from '@Components/TodoList/TodoList';
import LoaderCat from '@Components/Common/SvgIcons/LoaderCat';
import Modal from '@Components/Modal/Modal';
import * as Constants from '@/static/constants';

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
                body: Constants.CREATED_CARD_TITLE,
                checkboxes: [],
            }
        ]))
    }

    function removeTodo(position) {
        todos.splice(position, 1); // position = integer;
    }

    function changeTodo(position, editedCard) {
        todos.splice(position, 1, editedCard); // position = integer; editedCard = {}
    }

    function modalShow(id) {
        setOpenModal(!isOpenModal);
        setCardId(id);
    }

    function appendCheckbox(arr) {
        arr.push({
            title: Constants.CREATED_CHECKBOX_TITLE,
            completed: false
        });
    }

    function removeCheckbox(arr, position) {
        arr.splice(position, 1); // position = integer
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
                        todo={todos[cardId - 1]}
                        editMode={editMode}
                        changeTodo={changeTodo}
                        appendCheckbox={appendCheckbox}
                        removeCheckbox={removeCheckbox}
                        removeTodo={removeTodo}
                        modalShow={modalShow}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
