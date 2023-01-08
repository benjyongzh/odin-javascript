import './styles/App.css';
import React, {Component} from "react";
import SectionComponent from "./components/SectionComponent";
import uniqid from "uniqid";

class App extends Component{
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

  };

  onSubmit(){
    console.log("form submitted");
  };


  render(){

    const sections = {
      general: {
        title: "General Information",
        fixedInputs: [
          {title: "First Name", type: "text", name: "firstName", key: uniqid()},
          {title: "Last Name", type: "text", name: "lastName", key: uniqid()},
          {title: "Email", type: "email", name: "email", key: uniqid()},
          {title: "Summary", type: "text", name: "summary", key: uniqid()},
          {title: "Birthdate", type: "date", name: "birthdate", key: uniqid()},
        ],
      },

      education: {
        title: "Education",
        fixedInputs: [],
      },

      experience: {
        title: "Experience",
        fixedInputs: [],
      },
    }

    return(
      <div className="App">
        <form>
          <SectionComponent section={sections.general} sectionType="general" addable={false} />
          <SectionComponent section={sections.education} sectionType="education" addable={true} />
          <SectionComponent section={sections.experience} sectionType="experience" addable={true} />
          <button onClick={event => {
            event.preventDefault();
            this.onSubmit();
          }
          }>Submit</button>
        </form>

      </div>
    );
  };
};

export default App;
