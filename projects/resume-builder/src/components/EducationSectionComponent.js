import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ContentButtonRemove from "./ContentButtonRemove";
import "../styles/SubSectionComponent.css";

const EducationSectionComponent = props => {

    const {institute, level, startYear, endYear, removeSection, sectionKey} = props;

    const [showRemoveButton, setShowRemoveButton] = useState(false);

    return(
        <div className="subsection-container"  onMouseOver={() => setShowRemoveButton(true)} onMouseOut={() => setShowRemoveButton(false)}>

            <ContentButtonRemove  visible={showRemoveButton} onButtonClick={removeSection} sectionKey={sectionKey} />

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

/* 
class EducationSectionComponent extends Component{
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
        const {institute, level, startYear, endYear, removeSection, sectionKey} = this.props;

        return(
            <div className="subsection-container"  onMouseOver={this.showRemoveButton} onMouseOut={this.hideRemoveButton}>

                <ContentButtonRemove  visible={this.state.showRemoveButton} onButtonClick={removeSection} sectionKey={sectionKey} />

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
}; */
  
export default EducationSectionComponent;
  