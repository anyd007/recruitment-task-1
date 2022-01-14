import React from "react";
import PropTypes from "prop-types"
import './datalist.css'
import uniqid from 'uniqid';


const Datalist = props => {
return(    
<div>
    <table>
        <tbody>
        <tr>
        <td>{props.firstName}</td><td>{props.lastName}</td><td>{props.department}</td><td>{props.salaryAmount}</td>
        </tr>
        </tbody>
    </table>
</div>

)};
Datalist.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    department: PropTypes.string,
    salaryAmount: PropTypes.number
}

export default Datalist;