import React, { useState } from "react";
import ContentButtonAdd from "./ContentButtonAdd";
import InputComponent from "./InputComponent";
import EducationSectionComponent from "./EducationSectionComponent";
import ExperienceSectionComponent from "./ExperienceSectionComponent";

import uniqid from "uniqid";
import "../styles/SectionComponent.css";

const SectionComponent = props => {

    const {section, addable, sectionType} = props;

    const [showAddButton, setShowAddButton] = useState(false);

    const [subSections, setSubSections] = useState([]);

    const createSubSection = event => {
        event.preventDefault();
        //check if education or experience
        if (sectionType === "education"){
            createEducationSection();
        } else if (sectionType === "experience"){
            createExperienceSection();
        };
    };

    const createEducationSection = () => {
        const newSection = {
            institute: "",
            level: "",
            startYear: "",
            endYear: "",
            key: uniqid(),
        };
        setSubSections([...subSections, newSection]);
        console.log("ed sect created");
    };

    const createExperienceSection = () => {
        const newSection = {
            company: "",
            position: "",
            startYear: "",
            endYear: "",
            key: uniqid(),
        };
        setSubSections([...subSections, newSection]);
        console.log("exp sect created");
    };

    const removeSubSection = sectionKey => {
        console.log("remove button clicked");
        console.log(sectionKey);
        // this.setState({
        //     subSections: this.state.subSections.filter(subSection => subSection.key !== sectionKey)
        // });
        setSubSections(subSections.filter(subSection => subSection.key !== sectionKey));
    };

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
        
        <div className="section-container" onMouseOver={() => setShowAddButton(true)} onMouseOut={() => setShowAddButton(false)}>
            <header className="section-title">{section.title}</header>

            <ContentButtonAdd enabled={addable} visible={showAddButton} onButtonClick={createSubSection} />

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
                                    sectionKey={item.key}
                                    removeSection={removeSubSection}
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
                                    sectionKey={item.key}
                                    removeSection={removeSubSection}
                                />
                            );
                        };
                        
                    })
                }

            </div>
        </div>
        
    );
};

/* class SectionComponent extends Component{
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
        console.log("ed sect created");
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
        console.log("exp sect created");
    };

    removeSubSection(sectionKey){
                //find parent of event.target
        // console.log(event.target.parentElement);
        // const targetSection = event.target.parentElement;
        // //find key
        // const sectionKey = targetSection.getAttribute('key');

        //traverse this.state.subSection
        //use keyID to detect which item to remove from this.state.subSection
        console.log("remove button clicked");
        console.log(sectionKey);
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
                                        sectionKey={item.key}
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
                                        sectionKey={item.key}
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
    
}; */

export default SectionComponent;
  