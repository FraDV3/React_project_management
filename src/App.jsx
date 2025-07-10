// Import component dependencies and React hooks
import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ProjectsList from "./components/ProjectsList.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

// App component manages global state and routes the UI between project views
function App() {
  // Stores all projects including their tasks
  const [projects, setProjects] = useState([]);
  // Tracks which project-related component to show: 'none', 'new', or 'selected'
  const [projectState, setProjectState] = useState("none");
  // Holds the currently selected project to display or modify
  const [selectedProject, setSelectedProject] = useState(null);

  // Adds a new project to the projects array and resets UI state
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random().toString(),
      tasks: [],
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setProjectState("none");
  }

  // Resets the view to default (no project selected or created)
  function handleCancel() {
    setProjectState("none");
  }

  // Updates the selected project and switches to 'selected' view
  function handleSelectedProject(project) {
    setSelectedProject(project);
    setProjectState("selected");
  }

  // Adds a task to the selected project and updates both state and local reference
  function handleAddTask(text) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.id === selectedProject?.id
          ? {
              ...project,
              tasks: [...project.tasks, { id: Math.random().toString(), text }],
            }
          : project
      );

      const updatedProject = updatedProjects.find(
        (project) => project.id === selectedProject?.id
      );
      setSelectedProject(updatedProject);

      return updatedProjects;
    });
  }

  // Deletes a task from the selected project and updates both state and local reference
  function handleDeleteTask(taskId) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.id === selectedProject?.id
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      );

      const updatedProject = updatedProjects.find(
        (project) => project.id === selectedProject?.id
      );
      setSelectedProject(updatedProject);

      return updatedProjects;
    });
  }

  // Removes a project by ID and resets selection if it was the active one
  function handleDeleteProject(projectId) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(null);
      setProjectState("none");
    }
  }

  // Switches to 'new' project creation mode
  function handleStartAddProject() {
    setProjectState("new");
  }

  // Render main layout with Sidebar and the current project state view
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projects}
        onSelectedProject={handleSelectedProject}
      />
      <main className="h-screen flex-1 mx-4">
        {projectState === "selected" && (
          <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
        {projectState === "new" && (
          <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />
        )}
        {projectState === "none" && (
          <ProjectsList
            projects={projects}
            onSelectedProject={handleSelectedProject}
            onDeleteProject={handleDeleteProject}
            onStartAddProject={handleStartAddProject}
          />
        )}
      </main>
    </div>
  );
}

export default App;
