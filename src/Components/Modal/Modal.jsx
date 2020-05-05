import React from 'react';

function Modal() {
    return (
        <div className="modal__overlay" onClick={() => console.log('clicked')}>
            <div className="modal-area">
                <h2 className="modal-area__title">
                    Купить продукты на неделю
                </h2>

                <div className="modal-area__body">
                    <p className="modal-area__descr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus commodi consequatur dignissimos, dolores dolorum ea eligendi eveniet,
                        fuga, hic impedit inventore itaque nesciunt praesentium repudiandae similique
                        vel voluptas voluptate voluptatibus.
                    </p>
                    <div className="modal-area__checkbox-wrapper">
                        <label className="checkbox modal-area__checkbox-single">
                            <input className="checkbox__input" type="checkbox" name="checkbox" />
                            <span className="checkbox__text">Молоко</span>
                        </label>

                        <label className="checkbox modal-area__checkbox-single">
                            <input className="checkbox__input" type="checkbox" name="checkbox" />
                            <span className="checkbox__text">Хлеб</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;