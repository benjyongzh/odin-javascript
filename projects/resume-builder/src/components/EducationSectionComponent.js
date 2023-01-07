import React, { Component } from "react";
import InputComponent from "./InputComponent";
import "../styles/SubSectionComponent.css";

class ExperienceSectionComponent extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {institute, level, startYear, endYear} = this.props;

        return(
            <div className="subsection-container">
                <InputComponent
                    id="institute"
                    textLabel="Institute"
                    inputType="text"
                    inputName="institute"
                    children={institute}
                />
                <InputComponent
                    id="level"
                    textLabel="Level"
                    inputType="text"
                    inputName="level"
                    children={level}
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
  