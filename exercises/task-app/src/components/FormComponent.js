import React, { Component, useState } from "react";

export default class FormComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            taskInput: "",
        };

        this.onInputChange = this.onInputChange.bind(this);

    };

    onInputChange(value){
        this.setState({
            taskInput: value,
        });
    };

    onSubmit(){

    };

    render(){

        // const {onSubmitButtonClicked} = this.props;
        const taskInput = this.props.taskInput;

        // const [taskInput, setTaskInput] = useState("");

        return(

            <form>
                {/* <input type="text" placeholder="type task here" value={taskInput} onChange={event => {setTaskInput(event.target.value)}} /> */}
                <input type="text" placeholder="type task here" value={taskInput} onChange={this.onInputChange} />
                <button className="submitButton" onClick={this.onSubmitButtonClicked}>Submit</button>
            </form>
        )
    }
};