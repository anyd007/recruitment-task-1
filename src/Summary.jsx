import React from "react";
import getArraySum from 'get-array-sum';
import PropTypes from "prop-types"

const Summary = (props)=>{
    const sum = getArraySum([props.salaryAmount])
    return(
 <>
    <table>
        <tbody>
        <tr>
    <td style={{visibility:'hidden' }}></td><td style={{visibility:'hidden' }}></td><td><strong>Summary</strong></td><td>{sum}</td>
     </tr>
        </tbody>
    </table>
</>  
    )  
}

   Summary.propTypes ={
    salaryAmount: PropTypes.number
   }


export default Summary;