import { useState, useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAddProject, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");
  const modal = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (!enteredTitle || !enteredDueDate || !enteredDescription) {
      modal.current.open();
      return;
    }
    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onAddProject(projectData);
  }

  return (
    <>
      <Modal ref={modal} />
      <div className="w-[35rem] mt-16">
        <h2 className="text-2xl font-bold text-stone-400 px-4">
          Create a New Project
        </h2>
        <form className="mt-4 text-right px-4" onSubmit={handleSubmit}>
          <Input
            label="Title"
            value={enteredTitle}
            onChange={(event) => setEnteredTitle(event.target.value)}
          />
          <Input
            label="Description"
            textarea
            value={enteredDescription}
            onChange={(event) => setEnteredDescription(event.target.value)}
          />
          <Input
            label="Due Date"
            type="date"
            value={enteredDueDate}
            onChange={(event) => setEnteredDueDate(event.target.value)}
          />
          <menu className="flex justify-end items-center gap-4 my-4">
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
        </form>
      </div>
    </>
  );
}
