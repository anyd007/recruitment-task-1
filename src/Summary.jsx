import React from "react";
import getArraySum from 'get-array-sum';
import {sumArry} from './extras'
import PropTypes from "prop-types"

const Summary = (props)=>{
    
    return(
 <>
    <table>
        <tbody>
        <tr>
    <td style={{visibility:'hidden' }}></td><td style={{visibility:'hidden' }}></td><td><strong>Summary</strong></td><td></td>
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