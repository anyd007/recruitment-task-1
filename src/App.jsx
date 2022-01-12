import React, {Component} from "react";
import Datalist from "./Datalist";
import './App.css'
import Title from "./Title";
import AddForm from "./AddFrom";
import uniqid from 'uniqid';

class App extends Component {
    constructor(){
        super();
        this.state = {
            workers: [],
            newWorkers:{
                id: uniqid(),
                firstName:'',
                lastName:'',
                department:'',
                salaryAmount: ''
            }
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
    render() {
        const workers = this.state.workers.map(el =>{
            return <Datalist 
            firstName = {el.firstName} 
            lastName = {el.lastName} 
            department = {el.department} 
            salaryAmount = {el.salaryAmount}/>
        })
        return(
        <div className="app">
            <Title/>
         {workers}
         <AddForm 
         firstName={this.state.newWorkers.firstName}
         lastName={this.state.newWorkers.lastName}
         department={this.state.newWorkers.department}
         salaryAmount={this.state.newWorkers.salaryAmount}
         onSave={()=>this.handleSaveForm()}
         onInputChange={(val) => this.handleAddForm(val)}/>
     </div>
        )}
}


 export default App;