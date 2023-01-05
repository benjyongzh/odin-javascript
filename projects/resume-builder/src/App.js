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
        content: [
          {title: "First Name", type: "text"},
          {title: "Last Name", type: "text"},
          {title: "Age", type: "number"},
          {title: "Summary", type: "text"},
        ],
      },

      education: {
        title: "Education",
        content: [
          // {title: "Institute", type: "text"},
          // {title: "Qualification", type: "text"},
          // {title: "Start Year", type: "number"},
          // {title: "End Year", type: "number"},
        ],
      },

      experience: {
        title: "Experience",
        content: [
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
          <SectionComponent section={sections.general} />
          <SectionComponent section={sections.education} />
          <SectionComponent section={sections.experience} />
        </form>

      </div>
    );
  };
};

export default App;
