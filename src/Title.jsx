import React from 'react';
import './title.css'
import TableFilter from './tableFilter';


const Title = (props) =>{
    const [state, setState] = React.useState(false)
    return(
<div className='title'>
{state ? <TableFilter /> : null}
{!state ? <button onClick={() => setState(true)} className='open-filter-btn'>workers filter</button> : null}

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
}
  

export default Title;
