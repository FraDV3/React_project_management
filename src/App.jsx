import Header from "./components/Header.jsx";
import ListOfProjects from "./components/ListOfProjects.jsx";
import { useState } from "react";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectState, setProjectState] = useState("new");
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random().toString(),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setProjectState("none");
  }

  function handleCancel() {
    setProjectState("none");
  }

  function handleSelectedProject(project) {
    setSelectedProject(project);
    setProjectState("selected");
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Header />
      {projectState === "new" && (
        <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />
      )}
      {projectState === "selected" && (
        <div className="text-center mt-4">
          <p className="text-stone-600">Project: {selectedProject.title}</p>
        </div>
      )}
      <main>
        <ListOfProjects
          projects={projects}
          onSelectedProject={handleSelectedProject}
        />
      </main>
    </div>
  );
}

export default App;
