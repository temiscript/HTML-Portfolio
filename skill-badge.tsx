import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="inline-flex flex-col">
      <div className="bg-muted px-3 py-1 rounded-md text-sm font-medium">{name}</div>
      <div className="h-1 w-full bg-muted-foreground/20 mt-1 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-primary rounded-full",
            level >= 80 ? "bg-green-500" : level >= 60 ? "bg-blue-500" : "bg-amber-500",
          )}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

