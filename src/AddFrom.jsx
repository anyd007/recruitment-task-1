import React from "react";
import './AddForm.css'
import { validInputs } from './extras'
import PropTypes from "prop-types"

const AddForm = props => {
    const validInputsCheck = 
        validInputs(props.firstName && props.lastName && props.department && props.salaryAmount)
    return(
        <div className="add-from">
            <h2>Add Workers</h2>
            <h3>all fields are required</h3>
                <div className="add-form_inputs">
                <label htmlFor='first-name'>First Name</label><br/>
                <input type="text" 
                id='first-name' 
                name='firstName'
                value={props.firstName}
                onKeyPress={e=>validInputs(e)}
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}>
                </input>
                </div>
                <div className="add-form_inputs">
                <label htmlFor='lastName'>Last Name</label><br/>
                <input type='text' 
                id="last-name" 
                name='lastName'
                value={props.lastName}
                onChange={e => props.onInputChange({[e.target.name]: e.target.value})}/>
                </div>
                <div className="add-form_inputs">
                <label htmlFor='department'>Department</label><br/>
                <input type='text' 
                id="department" 
                name='department'
                value={props.department}
                onChange={e => props.onInputChange({[e.target.name]: e.target.value})}/>
                </div>
                <div className="add-form_inputs">
                <label htmlFor='salaryAmount'>salary Amount</label><br/>
                <input type='number' 
                id="salary-amount" 
                name='salaryAmount'
                value={props.salaryAmount}
                onChange={e => props.onInputChange({[e.target.name]: e.target.value})}/>
                </div>
                <button disabled={!validInputsCheck}
                onClick={() => props.onSave()}>ADD</button>
        </div>
    )
}
AddForm.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    department: PropTypes.string,
    salaryAmount: PropTypes.number
}

export default AddForm;