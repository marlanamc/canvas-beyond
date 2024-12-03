export function Card({ className, ...props }) {
  return (
    <div
      className={`rounded-lg border bg-card shadow-sm ${className}`}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={`p-6 ${className}`}
      {...props}
    />
  )
} 