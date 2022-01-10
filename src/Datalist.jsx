import React from "react";
import PropTypes from "prop-types"


const Datalist = props => (

<div>
     <form>
        <input type='text' placeholder="first name" name='firstNane' value={props.firstName}/>
        <input type='text' name= 'lastName' value={props.lastName}/>
        <input type='text' name= 'department' value={props.department}/>
        <input type='number' name = 'salary-amount' value={props.salaryAmount}/>
    </form>
    {/* <div className="datalist">
    <strong>{props.firstName}</strong> - {props.time}
   </div> */}
</div>
);
// Datalist.propTypes = {
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     department: PropTypes.string,
//     salaryAmount: PropTypes.number
// }

export default Datalist;