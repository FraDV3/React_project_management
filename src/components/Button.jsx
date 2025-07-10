// Reusable Button component
// Accepts `children` for label and `onClick` handler for actions
export default function Button({ children, onClick }) {
  // Render a styled button element using Tailwind CSS classes
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-50 hover:font-semibold"
    >
      {/* Display the button label or content */}
      {children}
    </button>
  );
}
