import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import editIcon from '@/assets/icons/svg/pencil.svg';
import viewIcon from '@/assets/icons/svg/eye.svg';
import useGlobal from '@store';

import ButtonIcon from '@Components/Common/Buttons/ButtonIcon';
import PropTypes from 'prop-types';

function TodoCard({ id, title, description}) {
    const [globalState, globalActions] = useGlobal();

    function showModal(isEdit) { // isEdit = true || false
        globalActions.todoCards.setCurrentTodoId(id);
        globalActions.todoCards.setEditMode(isEdit);
    }

    return (
        <li className="todo-cards__item">
            <article className="todo-card" id={id}>
                <div className="todo-card__border" />
                <Dotdotdot clamp={2}>
                    <h6 className="todo-card__title">
                        {title}
                    </h6>
                </Dotdotdot>

                <Dotdotdot clamp={'auto'}>
                    <p className="todo-card__descr">
                        {description}
                    </p>
                </Dotdotdot>
                <div className="todo-card__button-container">
                    <ButtonIcon
                        handleClick={() => showModal(true)}
                        icon={editIcon}
                    />
                    <ButtonIcon
                        handleClick={() => showModal(false)}
                        icon={viewIcon}
                    />
                </div>
            </article>
        </li>
    )
}

TodoCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default TodoCard;
