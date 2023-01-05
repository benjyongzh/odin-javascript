import React, { Component } from "react";
import ContentButtonAdd from "./ContentButtonAdd";

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

        if (section.fixedInputs != []){

        };

        if (section.content != []){
            
        };


        return(
            <div className="section-container">
                <header className="section-title">{section.title}</header>
                <div className="section-content">


                </div>
                <ContentButtonAdd enabled={addable} />
            </div>
            
        );
    }
  
    
  };
  
  export default SectionComponent;
  