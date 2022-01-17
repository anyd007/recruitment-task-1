import React from "react";
import './table-filter.css';


const TableFilter = (props)=>{
    
    return(
    <div className="table-filter">
        <h3 className="info">unfortunately, this element is not yet functional</h3>
    <h3 className="filter-name-component">Filter for the workers table</h3>
        <div className="table-filter_inputs">
            <label htmlFor='filter-person'>find worker</label><br/>
            <input type='text' name='filter-person'/>
        </div>
        <div className="table-filter_inputs">
            <label htmlFor='filter-department'>find department</label><br/>
            <input type='text' name="filter-department"/>
        </div>
        <div className="table-filter_inputs">
            <label htmlFor='filter-salary'>salary filter</label><br/>
            <input type="range" name="filter-salary"/>
        </div>
            <button disabled >find</button>
            {/* <button onClick={() => props.onHide()}>close filter</button>
            {props.onHide ? <TableFilter/> : <TableFilter/>} */}
           
        
        

    </div>
    )
}



export default TableFilter;