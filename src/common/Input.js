import React from 'react'

const Input = ({name, type, errors, label, labelName, placeholder, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{labelName}</label>
            <input type={type} className="form-control" id={label} name={name}
                onChange={onChange}
                aria-describedby="emailHelp" placeholder={placeholder} />
            {errors && <div className="alert alert-danger">{errors}</div> }
        </div>
    )
}

export default Input