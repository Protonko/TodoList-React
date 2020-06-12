import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useGlobal from '@store';

function Modal({ children }) {
    const [globalState, globalActions] = useGlobal();
    const modalOverlay = useRef();

    function closeModal(event) {
        if (event.target === modalOverlay.current) {
            globalActions.todoCards.setCurrentTodoId(null);
            globalState.isEdit && globalActions.checkboxes.getCheckboxCache();
        }
    }

    return (
        <div ref={modalOverlay} className="modal__overlay fade-in" onClick={closeModal}>
            <div className="modal-area slide-down">
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Modal;
