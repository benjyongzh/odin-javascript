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
        const {institute, level, startYear, endYear, removeSection} = this.props;

        return(
            <div className="subsection-container"  onMouseOver={this.showRemoveButton} onMouseOut={this.hideRemoveButton}>

                <ContentButtonRemove  visible={this.state.showRemoveButton} onButtonClick={removeSection} />

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
  