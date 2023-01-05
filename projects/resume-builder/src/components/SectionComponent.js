import React, { Component } from "react";
import ContentButtonAdd from "./ContentButtonAdd";
import InputComponent from "./InputComponent";

class SectionComponent extends Component{
    constructor(props){
      super(props);

    //   this.onInputChange = this.onInputChange.bind(this);

    //   this.state = {
    //     value: "",
    //   };

    };

    // onInputChange(event){
    //     this.setState({
    //         value: event.target.value
    //     });
    // };
    
    render(){
        const {section, addable} = this.props;

        const fixedInputs = section.fixedInputs.map(input => 
            <InputComponent
            id={input.name}
            name={input.name}
            textLabel={input.title}
            inputType={input.type}
            />
        );

        const subSections = section.subSections.map(subsection => 
            {}//<li key={task.id}>{task.text}</li>
        );


        return(
            <div className="section-container">
                <header className="section-title">{section.title}</header>
                <div className="section-content">
                    {fixedInputs}
                    {subSections}
                </div>
                <ContentButtonAdd enabled={addable} />
            </div>
            
        );
    }
  
    
  };
  
  export default SectionComponent;
  