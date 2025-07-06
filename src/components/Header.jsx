export default function Header() {
  return (
    <header className="bg-stone-900 text-white py-4 px-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Project Manager</h1>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        + Add Project
      </button>
    </header>
  );
}
