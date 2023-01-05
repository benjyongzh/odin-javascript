// import './App.css';
import React, {Component} from "react";
import InputComponent from "./components/InputComponent";
import SectionComponent from "./components/SectionComponent";

class App extends Component{
  constructor(props){
    super(props);

  };


  render(){

    const sections = {
      general: {
        title: "General Information",
        fixedInputs: [
          {title: "First Name", type: "text", name: "firstName"},
          {title: "Last Name", type: "text", name: "lastName"},
          {title: "Age", type: "number", name: "age"},
          {title: "Summary", type: "text", name: "summary"},
        ],
        subSections: [],
      },

      education: {
        title: "Education",
        fixedInputs: [],
        subSections: [
          // {title: "Institute", type: "text"},
          // {title: "Qualification", type: "text"},
          // {title: "Start Year", type: "number"},
          // {title: "End Year", type: "number"},
        ],
      },

      experience: {
        title: "Experience",
        fixedInputs: [],
        subSections: [
          // {title: "Workplace", type: "text"},
          // {title: "Job Title", type: "text"},
          // {title: "Start Year", type: "number"},
          // {title: "End Year", type: "number"},
        ],
      },
    }

    return(
      <div>
        <form>
          {/* <InputComponent textLabel="First Name" id="first-name" inputType="text" />
          <InputComponent textLabel="Last Name" id="last-name" inputType="text" />
          <InputComponent textLabel="Age" id="age" inputType="number" /> */}
          <SectionComponent section={sections.general} addable={false} />
          <SectionComponent section={sections.education} addable={true} />
          <SectionComponent section={sections.experience} addable={true} />
        </form>

      </div>
    );
  };
};

export default App;
