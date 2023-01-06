import React, { Component } from "react";
import InputComponent from "./InputComponent";

class SubSectionComponent extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {organisation, title, startYear, endYear} = this.props;

        return(
            <div className="subsection-container">
                <InputComponent
                    id="organisation"
                    textLabel="Organisation"
                    inputType="text"
                    inputName="organisation"
                    children={organisation}
                />
            </div>
            
        );
    };
};
  
export default SubSectionComponent;
  