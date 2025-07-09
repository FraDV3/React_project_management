import { useState } from "react";
import Input from "./Input.jsx";

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
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end items-center gap-4 my-4 px-4">
        <li className="flex justify-end space-x-2">
          <button
            type="button"
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            type="submit"
            className="px-6 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <form className="mt-4 text-right px-4" onSubmit={handleSubmit}>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </form>
    </div>
  );
}

/* <div className="mb-4">
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
      </div> */
