// Reusable Input component that handles both input and textarea fields
export default function Input({ label, textarea, ...props }) {
  // Common Tailwind CSS classes applied to both input and textarea
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  return (
    <p className="flex flex-col gap-1 my-4">
      {/* Render label for the input/textarea */}
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {/* 
        Render a <textarea> if the 'textarea' prop is true
        Otherwise, render a standard <input> element
      */}
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
