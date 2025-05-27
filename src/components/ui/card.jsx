export function Card({ children, className }) {
  return (
    <div className={`rounded-xl bg-gray-900 border border-gray-700 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
