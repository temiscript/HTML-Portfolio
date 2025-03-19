import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceItem from "@/components/experience-item"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate software engineer with 3+ years of experience building web applications.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Alex Johnson"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a software engineer with a passion for creating efficient, scalable, and user-friendly web
                applications. With over 3 years of experience in both frontend and backend development, I've worked on a
                variety of projects ranging from e-commerce platforms to data visualization tools.
              </p>
              <p className="text-lg mb-4">
                My journey in software development began during my computer science studies, where I discovered my love
                for problem-solving and creating digital solutions. Since then, I've been continuously expanding my
                skill set and staying up-to-date with the latest technologies.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                projects. I'm always looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">🎓</span>
                  <span>BSc in Computer Science</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">💼</span>
                  <span>3+ years professional experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">🌐</span>
                  <span>Full-stack developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">🚀</span>
                  <span>Passionate about clean code and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">🔍</span>
                  <span>Detail-oriented problem solver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">🤝</span>
                  <span>Team player with excellent communication skills</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="HTML" level={90} />
                <SkillBadge name="CSS" level={85} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="TypeScript" level={80} />
                <SkillBadge name="React" level={85} />
                <SkillBadge name="Next.js" level={75} />
                <SkillBadge name="Tailwind CSS" level={80} />
                <SkillBadge name="Bootstrap" level={85} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" level={80} />
                <SkillBadge name="Express" level={75} />
                <SkillBadge name="Python" level={70} />
                <SkillBadge name="Django" level={65} />
                <SkillBadge name="PHP" level={75} />
                <SkillBadge name="Laravel" level={70} />
                <SkillBadge name="SQL" level={80} />
                <SkillBadge name="MongoDB" level={70} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" level={85} />
                <SkillBadge name="Docker" level={70} />
                <SkillBadge name="AWS" level={65} />
                <SkillBadge name="CI/CD" level={70} />
                <SkillBadge name="Jest" level={75} />
                <SkillBadge name="Figma" level={60} />
                <SkillBadge name="Agile" level={80} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution with product management, cart functionality, and payment integration."
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates and team workspaces."
              technologies={["TypeScript", "Next.js", "PostgreSQL", "Socket.io"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Data Visualization Dashboard"
              description="An interactive dashboard for visualizing complex datasets with customizable charts and filters."
              technologies={["JavaScript", "D3.js", "Express", "MySQL"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Fitness Tracking App"
              description="A mobile-responsive application for tracking workouts, nutrition, and fitness progress."
              technologies={["React", "Firebase", "Chart.js", "Tailwind CSS"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Content Management System"
              description="A custom CMS built for a digital magazine with advanced editing capabilities."
              technologies={["PHP", "Laravel", "MySQL", "Alpine.js"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Weather Forecast App"
              description="A weather application that provides detailed forecasts and historical weather data."
              technologies={["JavaScript", "Python", "Django", "OpenWeather API"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceItem
              title="Software Engineer"
              company="TechSolutions Inc."
              period="2022 - Present"
              description="Developing and maintaining full-stack web applications using React, Node.js, and PostgreSQL. Implementing new features, optimizing performance, and collaborating with cross-functional teams."
              achievements={[
                "Reduced page load time by 40% through code optimization and implementing lazy loading",
                "Led the migration from REST API to GraphQL, improving data fetching efficiency",
                "Implemented automated testing that increased code coverage by 35%",
              ]}
            />
            <ExperienceItem
              title="Junior Web Developer"
              company="Digital Creations"
              period="2020 - 2022"
              description="Worked on frontend development using HTML, CSS, JavaScript, and PHP. Collaborated with designers to implement responsive web designs and interactive features."
              achievements={[
                "Developed 10+ responsive websites for clients across various industries",
                "Created a reusable component library that reduced development time by 25%",
                "Implemented SEO best practices that improved client site rankings by an average of 15 positions",
              ]}
            />
            <ExperienceItem
              title="Web Development Intern"
              company="InnovateTech"
              period="2019 - 2020"
              description="Assisted in the development of web applications, fixed bugs, and learned industry best practices under senior developer mentorship."
              achievements={[
                "Contributed to the development of an internal tool that automated report generation",
                "Resolved 50+ bugs in the company's main product",
                "Created documentation for the onboarding process of new developers",
              ]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:alex@example.com" className="hover:text-primary transition-colors">
                    alex@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com/in/alexjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/alexjohnson
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/alexjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/alexjohnson
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently open to new opportunities and collaborations. Whether you have a question or just want
                  to say hi, I'll try my best to get back to you!
                </p>
                <Button asChild variant="outline" className="mt-2">
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Alex Johnson. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

