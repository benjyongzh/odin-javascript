import React, {Component} from "react";

export default class App extends Component{
  constructor(props){
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0
    }

    this.increment = () => {
      console.log("increment()");
      this.setState({
        counter: this.state.counter += 1
      });
    };

    this.decrement = () => {
      console.log("decrement()");
      this.setState({
        counter: this.state.counter -= 1
      });
    };


  };

  render(){
    console.log("render()");

    return(
      <div>
        <button onClick={this.increment}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <div className="counter">
          Counter: {this.state.counter}
        </div>
      </div>
    );
  };

};