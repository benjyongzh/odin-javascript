import React, { useState } from "react";
import "../styles/ContentButtonAdd.css";

const ContentButtonAdd = props => {
    const {enabled, visible, onButtonClick} = props;

    if (!enabled) return null;

    if (!visible) return null;

    return(
        <button className="button content-add" onClick={onButtonClick}>Add</button>
    );
};


/* class ContentButtonAdd extends Component{
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
    
}; */
  
export default ContentButtonAdd;