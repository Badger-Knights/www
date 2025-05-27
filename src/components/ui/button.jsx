export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
