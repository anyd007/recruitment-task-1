import React from "react";
import PropTypes from "prop-types"


const Datalist = props => (

<div>
    <table>
        {/* <tr>
            <th>first Name</th> <th>last Name</th> <th>department</th> <th>salary Amount</th>
        </tr> */}
        <tr>
            <td>{props.firstName}</td> <td> {props.lastName} </td> <td> {props.department} </td> <td> {props.salaryAmount}</td>
        </tr>
    </table>
</div>
);
// Datalist.propTypes = {
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     department: PropTypes.string,
//     salaryAmount: PropTypes.number
// }

export default Datalist;