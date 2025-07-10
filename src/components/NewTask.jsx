// NewTask component allows users to input and add a new task to the current project.

// Importing the reusable Button component and useState hook from React
import Button from "./Button.jsx";
import { useState } from "react";

// Define the NewTask functional component that receives an `onAdd` callback prop
export default function NewTask({ onAdd }) {
  // State to hold the current input value for the new task
  const [newTask, setNewTask] = useState("");

  // Updates newTask state as the user types in the input field
  function handleChange(event) {
    setNewTask(event.target.value);
  }

  // Handles the add button click:
  // - Prevents empty tasks
  // - Clears the input
  // - Triggers the `onAdd` callback with the task content
  function handleClick(event) {
    if(newTask.trim() === "") {
      return; // Prevent adding empty tasks
    }
    setNewTask("");
    onAdd(newTask);
  }

  // JSX layout for task input and add button
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}