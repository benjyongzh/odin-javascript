import './styles/App.css';
import React, {Component} from "react";
import SectionComponent from "./components/SectionComponent";
import uniqid from "uniqid";

class App extends Component{
  constructor(props){
    super(props);

  };


  render(){

    const sections = {
      general: {
        title: "General Information",
        fixedInputs: [
          {title: "First Name", type: "text", name: "firstName", key: uniqid()},
          {title: "Last Name", type: "text", name: "lastName", key: uniqid()},
          {title: "Age", type: "number", name: "age", key: uniqid()},
          {title: "Summary", type: "text", name: "summary", key: uniqid()},
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
      <div className="App">
        <form>
          <SectionComponent section={sections.general} addable={false} />
          <SectionComponent section={sections.education} addable={true} />
          <SectionComponent section={sections.experience} addable={true} />
        </form>

      </div>
    );
  };
};

export default App;
