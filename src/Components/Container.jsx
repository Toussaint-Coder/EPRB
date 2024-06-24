import React from "react"

export default function Container({ className, children }) {
  return (
    <div className={`max-w-6xl w-full mx-auto ${className}`}>{children}</div>
  )
}
