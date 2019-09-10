import React from 'react'
import Joi from 'joi-browser'
import Input from './Input';


export default class Form extends React.Component {

    validatePropery = ({ name, value }) => {

        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema)

        return error ? error.details[0].message : null;
    }


    submitLoginForm = (event) => {
        event.preventDefault()

        const errors = this.validate()

        this.setState({ errors: errors || {} })
        if (errors) return

        this.doSubmit();
    }

    handleChange = (event) => {

        const errors = { ...this.state.errors }
        const errorMessage = this.validatePropery(event.target)

        if (errorMessage) errors[event.target.name] = errorMessage
        else delete errors[event.target.name]

        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} type="submit" className="btn btn-primary">
                {label}
            </button>
        )
    }

    renderInput(data) {
       return <Input
            name={data.name}
            errors={this.state.errors[data.name]}
            labelName={data.labelName}
            type={data.type}
            label={data.label}
            placeholder={data.placeholder}
            onChange={this.handleChange} />
    }

}