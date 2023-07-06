import React from 'react';

const BackDrop = ({ onClickToggleCart }) => {
    return (
        <div
            id="backdrop"
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClickToggleCart}
        ></div>
    );
};
export default BackDrop;
