import React, { Component } from "react";
import ContentButtonAdd from "./ContentButtonAdd";
import InputComponent from "./InputComponent";
import SubSectionComponent from "./SubSectionComponent.js";

class SectionComponent extends Component{
    constructor(props){
        super(props);

        this.createSubSection = this.createSubSection.bind(this);

        this.state = {
            subSections: [],
        };

    };

    createSubSection(event){
        event.preventDefault();
        this.setState({
            subSections: [...this.state.subSections, {
                organisation: "",
                title: "",
                startYear: "",
                endYear: ""
            }]
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
            />
        );

        return(
            <div className="section-container">
                <header className="section-title">{section.title}</header>
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
                                />
                            )
                        })
                    }

                </div>
                <ContentButtonAdd enabled={addable} onClick={this.createSubSection} />
            </div>
            
        );
    };
    
};

export default SectionComponent;
  