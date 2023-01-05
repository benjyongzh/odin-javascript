import Overview from "./components/Overview";
// import FormComponent from "./components/FormComponent";
import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      taskInput:"",
      taskList: [],
    };


    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onInputChange(event){
    this.setState({
        taskInput: event.target.value,
    });
  };

  onSubmit(){
    //take Form and put into taskList
    //clear input textContent
    this.setState({
      taskList: this.state.taskList.push(this.state.taskInput),
    });
  };

  render(){
    // const taskInput = this.props.taskInput;

    return (
      <div>
        {/* <FormComponent taskInput={this.state.taskInput} onSubmitButtonClicked={this.onSubmit} /> */}
        <form>
            {/* <input type="text" placeholder="type task here" value={taskInput} onChange={event => {setTaskInput(event.target.value)}} /> */}
            <input type="text" placeholder="type task here" onChange={this.onInputChange} />
            <button className="submitButton" onClick={this.onSubmit}>Submit</button>
        </form>
        <Overview taskList={this.state.taskList}/>
      </div>
    );
  };
};

export default App;
