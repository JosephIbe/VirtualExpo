import React from 'react';
import '../styles/Auth.css';

const RadioButton = ({htmlfor, label, name, checked, id, handleChange, value}) => {
    return (
        <div className='form-radio'>
            <label htmlFor={htmlfor}>{label}</label>
            <input
                type="radio"
                name={name}
                id={id}
                checked={checked}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default RadioButton;
