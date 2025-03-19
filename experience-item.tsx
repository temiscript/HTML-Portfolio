import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export default function ExperienceItem({ title, company, period, description, achievements }: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <h4 className="font-semibold mb-2">Key Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

