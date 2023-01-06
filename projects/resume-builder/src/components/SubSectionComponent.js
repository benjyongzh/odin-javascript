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
                <InputComponent
                    id="title"
                    textLabel="Title"
                    inputType="text"
                    inputName="title"
                    children={title}
                />
                <InputComponent
                    id="startYear"
                    textLabel="Start Year"
                    inputType="number"
                    inputName="startYear"
                    children={startYear}
                />
                <InputComponent
                    id="endYear"
                    textLabel="End Year"
                    inputType="number"
                    inputName="endYear"
                    children={endYear}
                />
            </div>
            
        );
    };
};
  
export default SubSectionComponent;
  