// Component to display details of the selected project and its tasks
import Tasks from "./Tasks.jsx";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask }) {
  // Format the due date into a more readable format (e.g., 10 Jul 2025)
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Fallback content if no project is selected
  if (!project) {
    return <p className="text-center text-stone-500">No project selected.</p>;
  }

  // Main UI for the selected project, showing title, delete button, due date, description, and associated tasks
  return (
    <section className="mt-16 px-4 py-6 bg-white rounded-lg shadow-md">
      <header className="mb-4 pb-4 border-b2 border-stone-300">
        <div className="flex items-center justify-between mb-4 text-stone-600 ">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          // Button to delete the currently selected project
          <button
            onClick={() => onDelete(project.id)}
            className="mt-2 text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
        <p className="text-gray-400 mb-4">Due Date: {formattedDate}</p>
        <p className="text-gray-600 m-2 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <hr className="m-4  border-t border-stone-400" />
      // Render the Tasks component, passing down relevant handlers and the task list
      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={project.tasks}
      />
    </section>
  );
}
