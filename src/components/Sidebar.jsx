import Button from "./Button.jsx";

export default function Sidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 py-16 px-8 rounded-r-xl">
      <h2 className="mb-8  md:text-xl uppercase font-bold text-stone-200">
        Project Manager
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {(projects ?? []).map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px2 py1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
