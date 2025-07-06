import { useState } from "react";

export default function NewProject({ onAddProject, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onAddProject(projectData);
  }

  return (
    <form className="mt-4 text-right px-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="text-sm font-bold uppercase text-stone-500"
        >
          Title
        </label>
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
          value={enteredTitle}
          onChange={(event) => setEnteredTitle(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="text-sm font-bold uppercase text-stone-500"
        >
          Description
        </label>
        <textarea
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          rows="5"
          value={enteredDescription}
          onChange={(event) => setEnteredDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="dueDate"
          className="text-sm font-bold uppercase text-stone-500"
        >
          Due Date
        </label>
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="date"
          value={enteredDueDate}
          onChange={(event) => setEnteredDueDate(event.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="px-4 py-2 bg-stone-300 rounded hover:bg-stone-400"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700"
          onClick={{}}
        >
          Save
        </button>
      </div>
    </form>
  );
}
