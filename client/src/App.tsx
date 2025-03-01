// import { useState } from "react";
import "./App.css";
import WorkExperience from "./components/workExperience";

function App() {
  const description: string =
    "Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects";

  return (
    <>
      <div className="container">
        This is all test, to be deleted when pages are designed.
      </div>
      <div className="container">
        The container adds a container for your elements.
      </div>

      <WorkExperience
        title="Intern"
        employmentType="Internship"
        companyName="Outreachy"
        location="Remote"
        startDate={new Date(2022, 11, 5)}
        endDate={new Date(2023, 2, 3)}
        description={description}
        skills={["patternfly", "Redux"]}
      />
    </>
  );
}

export default App;
