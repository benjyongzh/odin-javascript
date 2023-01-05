import React, { Component } from "react";

class InputComponent extends Component{
    constructor(props){
      super(props);

      this.onInputChange = this.onInputChange.bind(this);

      this.state = {
        value: "",
      };

    };

    onInputChange(event){
        // event.target.value;
        this.setState({
            value: event.target.value
        });
    };
    
    render(){
        const {id, textLabel, inputType} = this.props;

        return(
            <div>
                <label htmlFor={id}>{textLabel}</label>
                <input id={id} type={inputType} onChange={this.onInputChange} value={this.state.value}/>
            </div>
            
        );
    }
  
    
  };
  
  export default InputComponent;
  