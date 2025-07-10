import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function ProjectsList({
  projects,
  onDeleteProject,
  onSelectedProject,
  onStartAddProject,
}) {
  if (!projects || projects.length === 0) {
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

  return (
    <ul className="mt-4 px-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="mb-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <h3
            onClick={() => onSelectedProject(project)}
            className="text-lg font-semibold text-stone-800"
          >
            {project.title}
          </h3>
          <p className="text-stone-600">{project.description}</p>
          <p className="text-sm text-stone-500">{project.dueDate}</p>
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
