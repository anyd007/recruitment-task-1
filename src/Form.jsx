import React, {Component} from "react";


class Form extends Component {
    render(){
        return(
            <>
            <form>
                <input type='text' name='first-name' />
                <input type='text' name='last-name' />
            </form>
            </>
        )
    }
}
export default Form
