import React, {Component} from "react";
import Datalist from "./Datalist";
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            workers: [
                {id : 0, firstName : "Adam", lastName : "Michnik", department : "gov", salaryAmount : 2000},
                {id : 1, firstName : "Lech", lastName : "Wałęsa", department : "gov", salaryAmount : 5000}
            ]
        }
    }
    render() {
        const workers = this.state.workers.map(el =>{
            return <Datalist firstName = {el.firstName} lastName = {el.lastName} department = {el.department} salaryAmount = {el.salaryAmount}/>
        })
        return(
        <div className="app">
         {workers}
     </div>
        )}
}


 export default App;