interface StatsBarProps {
  label: string
  value: string | number
  percentage: number
  color?: "primary" | "secondary" | "accent"
}

export function StatsBar({ label, value, percentage, color = "primary" }: StatsBarProps) {
  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  }

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-bold">{value}</span>
      </div>
      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${colorClasses[color]} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
