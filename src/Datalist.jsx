import React from "react";
import PropTypes from "prop-types"
import './datalist.css'


const Datalist = props => {
return(    
<div>
    <table>
        {/* <thead>
        <tr>
            <th>first Name</th> <th>last Name</th> <th>department</th> <th>salary Amount</th>
        </tr>
        </thead> */}
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