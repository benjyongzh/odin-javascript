import React, {Component} from "react";

const ErrorComponent = () =><div>{props.ignore}</div>;

export default class Counter extends Component{
  constructor(props){
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
      seed:0
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

  static getDerivedStateFromProps(props, state){
    if (props.seed && state.seed !== props.seed) {
        return {
            seed: props.seed,
            counter: props.seed
        }
    };
    return null;
  }

  componentDidMount(){
    console.log("Component Did Mount");
    console.log("====================================");
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
        console.log("Should component Update - DO NOT RENDER");

        return false;
    }
    console.log("Should component Update - RENDER");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Get Snapshot Before Update")
    return null;
  }

  render(){
    console.log("render()");

    if (this.props.showErrorComponent && this.state.error){
        return <div>We have encountered an error! {this.state.error.message}</div>
    }

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
        {this.props.showErrorComponent ? <ErrorComponent/> : null}
      </div>
    );
  };

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Component Did Update");
    console.log("===============================")
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
    console.log("===============================")

  }

  componentDidCatch(error, info){
    console.log("component Did Catch");
    this.setState({error, info})
  }

};