import Header from "./components/Header.jsx";
import ListOfProjects from "./components/ListOfProjects.jsx";
import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

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

  function handleDeleteProject(projectId) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(null);
      setProjectState("none");
    }
  }

  function handleStartAddProject() {
    setProjectState("new");
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Header onStartAddProject={handleStartAddProject} />
      {projectState === "new" && (
        <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />
      )}
      {projectState === "selected" && (
        <SelectedProject
          project={selectedProject}
          onDelete={handleDeleteProject}
        />
      )}
      <main>
        {projectState === "none" && (
          <ListOfProjects
            projects={projects}
            onSelectedProject={handleSelectedProject}
            onDeleteProject={handleDeleteProject}
          />
        )}
      </main>
    </div>
  );
}

export default App;
