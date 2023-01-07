import React, { Component } from "react";
import InputComponent from "./InputComponent";
import "../styles/SubSectionComponent.css";

class ExperienceSectionComponent extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {company, position, startYear, endYear} = this.props;

        return(
            <div className="subsection-container">
                <InputComponent
                    id="company"
                    textLabel="Company"
                    inputType="text"
                    inputName="company"
                    children={company}
                />
                <InputComponent
                    id="position"
                    textLabel="Position"
                    inputType="text"
                    inputName="position"
                    children={position}
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
  
export default ExperienceSectionComponent;
  