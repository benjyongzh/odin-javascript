import React, { Component } from "react";
import InputComponent from "./InputComponent";
import ContentButtonRemove from "./ContentButtonRemove";
import "../styles/SubSectionComponent.css";

class ExperienceSectionComponent extends Component{
    constructor(props){
        super(props);
        this.showRemoveButton = this.showRemoveButton.bind(this);
        this.hideRemoveButton = this.hideRemoveButton.bind(this);

        this.state = {
            showRemoveButton:false
        };
    }

    showRemoveButton(){
        this.setState({
            showRemoveButton: true
        });
    };

    hideRemoveButton(){
        this.setState({
            showRemoveButton: false
        });
    };
    
    render(){
        const {company, position, startYear, endYear, removeSection} = this.props;

        return(
            <div className="subsection-container" onMouseOver={this.showRemoveButton} onMouseOut={this.hideRemoveButton}>

                <ContentButtonRemove  visible={this.state.showRemoveButton} onButtonClick={removeSection} />

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
  