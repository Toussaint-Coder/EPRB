export default function Button({ children, className }) {
  return (
    <button
      className={`px-2 py-1 bg-secondary hover:bg-primary duration-75 text-white ${className}`}
    >
      {children}
    </button>
  )
}
