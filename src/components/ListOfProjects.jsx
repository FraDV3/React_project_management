export default function ListOfProjects() {
  return (
    <div className="mt-16 text-center">
      <img
        className="mx-auto w-40 opacity-75"
        src="src/assets/no-projects.png"
        alt="No projects available"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No projects yet...
      </h2>
      <p className="text-stone-600">Start by adding one!</p>
    </div>
  );
}