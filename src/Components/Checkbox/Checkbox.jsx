import React from 'react';
import useGlobal from '@store';

import CheckboxEdit from '@Components/Checkbox/CheckboxEdit';
import CheckboxView from '@Components/Checkbox/CheckboxView';

function Checkbox({ id, className }) {
    const [globalState, globalActions] = useGlobal();
    const currentTodoCheckbox = globalState.checkboxes.filter(elem => elem.id === id)[0];

    function toggleCheckbox() {
        const editedCheckboxes = globalState.checkboxes.map(checkbox => {
            if (checkbox.id === id) {
                checkbox.completed = !checkbox.completed;
            }

            return checkbox;
        });

        globalActions.checkboxes.completeToggle(editedCheckboxes);
    }

    function removeCheckbox() {
        globalActions.checkboxes.removeCheckbox(currentTodoCheckbox.id);
    }

    function handleInput(event) {
        globalState.checkboxes.map(checkbox => {
            if (checkbox.id === id) {
                checkbox.title = event.target.textContent;
            }

            return checkbox;
        });
    }

    return (
        <label className={`checkbox ${className}`}>
            {globalState.isEdit
                ? <CheckboxEdit
                    title={currentTodoCheckbox.title}
                    completed={currentTodoCheckbox.completed}
                    handleRemove={removeCheckbox}
                    handleInput={handleInput}
                />
                : <CheckboxView
                    title={currentTodoCheckbox.title}
                    completed={currentTodoCheckbox.completed}
                    handleChange={toggleCheckbox}
                />
            }
        </label>
    )
}

export default Checkbox;
