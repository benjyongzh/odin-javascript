import Overview from "./components/Overview";
// import FormComponent from "./components/FormComponent";
import React, { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      taskInput:{
        text: "",
        id: uniqid()
      },
      taskList: [],
    };


    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onInputChange(event){
    this.setState({
      taskInput:
        {
          text: event.target.value,
          id: this.state.taskInput.id
        }
    });
  };

  onSubmit(event){
    //take Form and put into taskList
    //clear input textContent
    event.preventDefault();
    this.setState({
      taskInput:{
        text: "",
        id: uniqid()
      },
      taskList: [...this.state.taskList, this.state.taskInput],
    });
  };

  render(){
    // const taskInput = this.props.taskInput;

    return (
      <div>
        {/* <FormComponent taskInput={this.state.taskInput} onSubmitButtonClicked={this.onSubmit} /> */}
        <form>
            {/* <input type="text" placeholder="type task here" value={taskInput} onChange={event => {setTaskInput(event.target.value)}} /> */}
            <input type="text" placeholder="type task here" onChange={this.onInputChange} value={this.state.taskInput.text}/>
            <button className="submitButton" onClick={this.onSubmit}>Submit</button>
        </form>
        <Overview taskList={this.state.taskList}/>
      </div>
    );
  };
};

export default App;
