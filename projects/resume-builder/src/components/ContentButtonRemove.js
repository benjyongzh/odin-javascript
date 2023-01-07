import React, { Component } from "react";
import "../styles/ContentButtonRemove.css";

class ContentButtonRemove extends Component{
    constructor(props){
      super(props);
    }

    
    
    render(){
        if (!this.props.visible) return null;

        return(
            <button className="button content-remove" onClick={this.props.onButtonClick}>Remove
            </button>
        );
    }
    
};
  
export default ContentButtonRemove;