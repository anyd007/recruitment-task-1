import React from 'react';
import './title.css'
import { validInputs } from './extras'


const Title = (props) =>(
<div className='title'>
    
    <h1>workers</h1> 
    <table>
        <thead>
        <tr>
            <th>first Name</th><th>last Name</th><th>department</th><th>salary Amount</th>
        </tr>
        </thead>
    </table> 

</div>
)
  

export default Title;
