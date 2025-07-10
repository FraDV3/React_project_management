// Sidebar component displays the project navigation panel with a list of projects and an option to add new ones.

// Import reusable Button component
import Button from "./Button.jsx";

// Define the Sidebar component and destructure props:
// - onStartAddProject: callback to initiate new project creation
// - onSelectedProject: callback to handle selecting an existing project
// - projects: array of current project objects
export default function Sidebar({
  onStartAddProject,
  onSelectedProject,
  projects,
}) {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 py-16 px-8 rounded-r-xl">
      {/* Sidebar heading */}
      <h2 className="mb-8  md:text-xl uppercase font-bold text-stone-200">
        Project Manager
      </h2>
      {/* Button to add a new project */}
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      {/* Dynamically render list of existing projects */}
      <ul className="mt-8">
        {(projects ?? []).map((project) => (
          <li key={project.id}>
            {/* Button to select a specific project */}
            <button
              onClick={() => onSelectedProject(project)}
              className="w-full text-left px2 py1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
