import React from 'react';
import useGlobal from '@store';
import { useFetch } from '@hooks/useFetch';
import * as Constants from '@static/constants';
import { NAVBAR_ITEMS } from '@static/data-objects';

import Header from '@Components/Common/Header';
import Navbar from '@Components/Common/Navbar/Navbar';
import Container from '@Components/Common/Container';
import AddTodoCard from '@Components/AddTodoCard/AddTodoCard';
import TodoList from '@Components/TodoList/TodoList';
import Modal from '@Components/Modal/Modal';
import ModalEdit from '@Components/Modal/ModalEdit';
import ModalView from '@Components/Modal/ModalView';
import LoaderCat from '@Components/Common/LoaderCat';


function App() {
    const [globalState, globalActions] = useGlobal();

    useFetch(Constants.API_LINK, globalActions.todoCards.getCards, globalActions.errorHandlers.showError);
    useFetch(Constants.API_LINK_CHECKBOXES, globalActions.checkboxes.getCheckbox, globalActions.errorHandlers.showError);

    return (
        <div className="App">
            <Header>
                <Navbar navbarItems={NAVBAR_ITEMS} />
            </Header>
            <main>
                <Container>
                    <AddTodoCard />
                    {globalState.loading
                        ? <LoaderCat />
                        : <TodoList todos={globalState.todos} />
                    }

                </Container>
                {Boolean(globalState.currentTodoId) && (
                    <Modal>
                        {globalState.isEdit
                            ? <ModalEdit />
                            : <ModalView />
                        }
                    </Modal>
                )}
            </main>
        </div>
    );
}

export default App;
