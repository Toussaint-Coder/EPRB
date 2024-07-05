export default function Button({ children, className }) {
  return (
    <button
      className={`px-4 py-2 bg-secondary hover:bg-primary duration-75 text-white text-xs ${className}`}
    >
      {children}
    </button>
  )
}
