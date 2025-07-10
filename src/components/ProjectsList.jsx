// Import the placeholder image for when no projects are available
// Import a reusable Button component
import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

// This component renders either a message prompting to add a new project
// or a list of existing projects with options to select or delete them.
export default function ProjectsList({
  projects,
  onDeleteProject,
  onSelectedProject,
  onStartAddProject,
}) {
  if (!projects || projects.length === 0) {
    // If there are no projects, display a message and a button to create one
    return (
      <div className="mt-24 text-center w-2/3">
        <img
          className="mx-auto w-16 h-16 object-contain opacity-75 "
          src={NoProjectImage}
          alt="An empty task list image"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No projects selected
        </h2>
        <p className="text-stone-400 mb-4">Start by adding one!</p>
        <p className="mt-8">
          <Button onClick={onStartAddProject}>
            Create a new project
          </Button>
        </p>
      </div>
    );
  }

  // Render a list of all available projects
  return (
    <ul className="mt-4 px-4">
      {projects.map((project) => (
        // Each list item displays project details and allows selection or deletion
        <li
          key={project.id}
          className="mb-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          {/* When the title is clicked, select the project */}
          <h3
            onClick={() => onSelectedProject(project)}
            className="text-lg font-semibold text-stone-800"
          >
            {project.title}
          </h3>
          <p className="text-stone-600">{project.description}</p>
          <p className="text-sm text-stone-500">{project.dueDate}</p>
          {/* When the delete button is clicked, remove the project */}
          <button
            onClick={() => onDeleteProject(project.id)}
            className="mt-2 text-red-500 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
