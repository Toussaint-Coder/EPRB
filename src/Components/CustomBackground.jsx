export default function CustomBackground({ className, children }) {
  return (
    <div className={`w-full h-full top-0 left-0 absolute ${className}`}>
      {children}
    </div>
  )
}
