import React, { Component } from "react";
import "../styles/ContentButtonAdd.css";

class ContentButtonAdd extends Component{
    constructor(props){
      super(props);
    }

    
    
    render(){
        if (!this.props.enabled) return null;

        if (!this.props.visible) return null;

        return(
            <button className="button content-add" onClick={this.props.onButtonClick}>Add
            </button>
        );
    }
    
};
  
export default ContentButtonAdd;