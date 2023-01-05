// import './App.css';
import React, {Component} from "react";
import InputComponent from "./components/InputComponent";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      
    };
  };


  render(){



    return(
      <div>
        <form>
          <InputComponent textLabel="First Name" id="first-name" inputType="text" />
          <InputComponent textLabel="Last Name" id="last-name" inputType="text" />
          <InputComponent textLabel="Age" id="age" inputType="number" />
        </form>

      </div>
    );
  };
};

export default App;
