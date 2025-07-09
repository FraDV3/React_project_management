import AddProjectButton from "./AddProjectButton.jsx";

export default function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 py-16 px-8 rounded-r-xl">
      <h2 className="mb-8  md:text-xl uppercase font-bold text-stone-200">
        Project Manager
      </h2>
      <AddProjectButton onClick={onStartAddProject}>
        + Add Project
      </AddProjectButton>
    </aside>
  );
}
