export default function ListOfProjects({ projects, onDeleteProject, onSelectedProject }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="mt-16 text-center">
        <img
          className="mx-auto w-40 opacity-75"
          src="src/assets/no-projects.png"
          alt="No projects available"
        />
        <h2 className="text-xl font-bold text-stone-700 my-4">
          No projects yet...
        </h2>
        <p className="text-stone-600">Start by adding one!</p>
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
