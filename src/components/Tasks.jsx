// Import the NewTask component which handles task input form
import NewTask from "./NewTask.jsx";

// Tasks component displays a list of tasks for a project and allows adding or deleting tasks
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      // Section heading for the tasks area
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      // Render the form to add a new task
      <NewTask onAdd={onAdd} />
      // Conditional rendering: show message if there are no tasks, else render the task list
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This Project does not have any tasks yet.
        </p>
      ) : (
        <ul className="my-4">
          {tasks.map((task, index) => (
            // Render each task as a list item with checkbox, task text, and delete button
            <li
              key={task.id}
              className="text-stone-700 flex items-center gap-2"
            >
              <input
                type="checkbox"
                id={`task-${index}`}
                className="accent-stone-600 h-4 w-4"
              />
              <span>{task.text}</span>
              // Delete button handler to remove the task from the list
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:underline ml-auto"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
