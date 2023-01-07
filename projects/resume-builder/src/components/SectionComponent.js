import React, { Component } from "react";
import ContentButtonAdd from "./ContentButtonAdd";
import InputComponent from "./InputComponent";
// import SubSectionComponent from "./SubSectionComponent.js";
import EducationSectionComponent from "./EducationSectionComponent";
import ExperienceSectionComponent from "./ExperienceSectionComponent";

import uniqid from "uniqid";
import "../styles/SectionComponent.css";

class SectionComponent extends Component{
    constructor(props){
        super(props);

        this.createSubSection = this.createSubSection.bind(this);
        this.createEducationSection = this.createEducationSection.bind(this);
        this.createExperienceSection = this.createExperienceSection.bind(this);
        this.removeSubSection = this.removeSubSection.bind(this);

        this.showAddButton = this.showAddButton.bind(this);
        this.hideAddButton = this.hideAddButton.bind(this);

        this.state = {
            sectionType: this.props.sectionType,
            subSections: [],
            showAddButton: false
        };

    };

    createSubSection(event){
        event.preventDefault();
        //check if education or experience
        if (this.state.sectionType === "education"){
            this.createEducationSection();
        } else if (this.state.sectionType === "experience"){
            this.createExperienceSection();
        };
    };

    createEducationSection(){
        this.setState({
            subSections: [...this.state.subSections, {
                institute: "",
                level: "",
                startYear: "",
                endYear: "",
                key: uniqid(),
            }]
        });
    };

    createExperienceSection(){
        this.setState({
            subSections: [...this.state.subSections, {
                company: "",
                position: "",
                startYear: "",
                endYear: "",
                key: uniqid(),
            }]
        });
    };

    removeSubSection(event){
        event.preventDefault();
        //find parent of event.target
        console.log(event.target.parentElement);
        const targetSection = event.target.parentElement;
        //find key
        const sectionKey = targetSection.getAttribute('key');

        //traverse this.state.subSection
        //use keyID to detect which item to remove from this.state.subSection
        this.setState({
            subSections: this.state.subSections.filter(subSection => subSection.key !== sectionKey)
        });
    };

    showAddButton(){
        this.setState({
            showAddButton: true
        });
    };

    hideAddButton(){
        this.setState({
            showAddButton: false
        });
    };
    
    render(){
        const {section, addable} = this.props;

        const {subSections, sectionType} = this.state;

        const fixedInputs = section.fixedInputs.map(input => 
            <InputComponent
            id={input.name}
            name={input.name}
            textLabel={input.title}
            inputType={input.type}
            key={input.key}
            />
        );


        return(
            <div className="section-container" onMouseOver={this.showAddButton} onMouseOut={this.hideAddButton}>
                <header className="section-title">{section.title}</header>

                <ContentButtonAdd enabled={addable} visible={this.state.showAddButton} onButtonClick={this.createSubSection} />

                <div className="section-content">

                    {fixedInputs}

                    {
                        subSections.map(item => {
                            if (sectionType === "education"){
                                return (
                                    <EducationSectionComponent
                                        institute={item.institute}
                                        level={item.level}
                                        startYear={item.startYear}
                                        endYear={item.endYear}
                                        key={item.key}
                                        removeSection={this.removeSubSection}
                                    />
                                )    
                            } else if (sectionType === "experience"){
                                return (
                                    <ExperienceSectionComponent
                                        company={item.company}
                                        position={item.position}
                                        startYear={item.startYear}
                                        endYear={item.endYear}
                                        key={item.key}
                                        removeSection={this.removeSubSection}
                                    />
                                );
                            };
                            
                        })
                    }

                </div>
            </div>
            
        );
    };
    
};

export default SectionComponent;
  