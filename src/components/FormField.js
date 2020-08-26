import React from 'react';
import '../styles/Auth.css';

const FormField = ({htmlfor, label, type, id, name, placeholder, handleChange}) => {
    return (
        <div>
            <br/>
            <label htmlFor={htmlfor}>{label}</label>
            <br/>
            <input
                type={type}
                className='form-input'
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};

export default FormField;
