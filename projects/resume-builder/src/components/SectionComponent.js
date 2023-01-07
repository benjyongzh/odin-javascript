import React, { Component } from "react";
import ContentButtonAdd from "./ContentButtonAdd";
import InputComponent from "./InputComponent";
import SubSectionComponent from "./SubSectionComponent.js";
import uniqid from "uniqid";
import "../styles/SectionComponent.css";

class SectionComponent extends Component{
    constructor(props){
        super(props);

        this.createSubSection = this.createSubSection.bind(this);

        this.showAddButton = this.showAddButton.bind(this);
        this.hideAddButton = this.hideAddButton.bind(this);

        this.state = {
            subSections: [],
            showAddButton: false
        };

    };

    createSubSection(event){
        event.preventDefault();
        console.log("create subsection")
        this.setState({
            subSections: [...this.state.subSections, {
                organisation: "",
                title: "",
                startYear: "",
                endYear: "",
                key: uniqid(),
            }]
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

        const {subSections} = this.state;

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
                            return (
                                <SubSectionComponent
                                    organisation={item.organisation}
                                    title={item.title}
                                    startYear={item.startYear}
                                    endYear={item.endYear}
                                    key={item.key}
                                />
                            )
                        })
                    }

                </div>
            </div>
            
        );
    };
    
};

export default SectionComponent;
  