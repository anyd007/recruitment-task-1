import React, {Component} from "react";
import Datalist from "./Datalist";
import './App.css'
import Title from "./Title";
import AddForm from "./AddFrom";
import TableFilter from "./tableFilter";
import Summary from './Summary'
import uniqid from 'uniqid';
import { hideShow } from './extras'

class App extends Component{
    constructor(){
        super();
        this.state={
            workers: [],
            newWorkers:{
                id: uniqid(),
                firstName:'',
                lastName:'',
                department:'',
                salaryAmount:''
            },
             summary:[0],
             hideElement: true
             
             
            
        }
    }
    handleAddForm = (val) =>{
        this.setState(prevValue=>{
            return{
                newWorkers: Object.assign(prevValue.newWorkers, val)
            }
        })
    }
    handleSaveForm = ()=>{
        this.setState(prevValue =>({
            workers: [...prevValue.workers, prevValue.newWorkers],
            newWorkers:{
                id: uniqid(),
                firstName:'',
                lastName:'',
                department:'',
                salaryAmount:''
            }
        }))
    }

    handleSaleryAmountSum =()=>{
        this.setState(prev =>({
           
                summary: [...prev.summary, ...prev.workers]
            
        }))
    }
    handleHideEle=() =>{
        this.setState(prevState => ({
          hideElement: !prevState.hideElement
        }));
      }
    
    

    render() {
        let show = hideShow(this.state.workers)
        // console.log(show);
        let workers = this.state.workers.map(el =>{
            return <Datalist
            firstName = {el.firstName} 
            lastName = {el.lastName} 
            department = {el.department} 
            salaryAmount = {el.salaryAmount}/>
            })
        // let summary = this.state.workers.map(el => {
        //     return <>salaryAmount={el.salaryAmount}</>
        // }) 
        // let useHideBtn = <TableFilter
    
        // let onHide=()=> this.state.handleHideEle()
    
        
        return(
        <div className="app">
            {show === true && <Title />}
            {/* {onHide} */}
         {workers}
         {show === true && <Summary
         sumValue={this.state.summary}
         saveSum={()=>this.handleSaleryAmountSum()}/>}
         <AddForm 
         firstName={this.state.newWorkers.firstName}
         lastName={this.state.newWorkers.lastName}
         department={this.state.newWorkers.department}
         salaryAmount={this.state.newWorkers.salaryAmount}
         onSave={()=>this.handleSaveForm()}
         onInputChange={(val) => this.handleAddForm(val)}
         />
        
     </div>
        )}
}


 export default App;