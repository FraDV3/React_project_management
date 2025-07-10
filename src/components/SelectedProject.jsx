export default function SelectedProject({ project, onDelete }) {
  if (!project) {
    return <p className="text-center text-stone-500">No project selected.</p>;
  }

  return (
    <section className="mt-4 px-4 py-6 bg-bl rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-700 mb-2">{project.description}</p>
      <p className="text-gray-700 mb-2">Due Date: {project.dueDate}</p>
      <button
        onClick={() => onDelete(project.id)}
        className="mt-2 text-red-500 hover:underline"
      >
        Delete
      </button>
    </section>
  );
}
