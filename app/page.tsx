"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cloud,
  Settings,
  Monitor,
  Code,
  Container,
  Zap,
  Shield,
  Terminal,
  GitBranch,
  Activity,
  MapPin,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [year, setYear] = useState<number | null>(null);

  const typingTexts = ["DevOps Engineer", "Cloud Enthusiast", "Linux Administrator", "Automation Specialist"]

  // Simple typing animation
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex]
    let currentIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(
      () => {
        if (!isDeleting && currentIndex < currentText.length) {
          setTypedText(currentText.slice(0, currentIndex + 1))
          currentIndex++
        } else if (!isDeleting && currentIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true
          }, 2000)
        } else if (isDeleting && currentIndex > 0) {
          setTypedText(currentText.slice(0, currentIndex - 1))
          currentIndex--
        } else if (isDeleting && currentIndex === 0) {
          isDeleting = false
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearInterval(typeInterval)
  }, [currentTextIndex])

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "expertise", "projects", "articles", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set year in footer
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "expertise", label: "Expertise" },
    { id: "projects", label: "Projects" },
    { id: "articles", label: "Articles" },
    { id: "contact", label: "Contact" },
  ]

  const techStack = [
    { name: "Linux", icon: Terminal },
    { name: "Docker", icon: Container },
    { name: "Kubernetes", icon: Settings },
    { name: "Ansible", icon: Code },
    { name: "Terraform", icon: Cloud },
    { name: "Jenkins", icon: GitBranch },
    { name: "GitHub Actions", icon: Zap },
    { name: "Prometheus", icon: Activity },
    { name: "Grafana", icon: Monitor },
  ]

  // Updated experiences based on LinkedIn profile
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Freelance",
      location: "Remote",
      duration: "2023 - Present",
      type: "Freelance",
      description: "Providing DevOps consulting and implementation services for various clients.",
      achievements: [
        "Implemented CI/CD pipelines for multiple client projects",
        "Automated infrastructure deployment using Terraform and Ansible",
        "Optimized cloud costs and improved system reliability",
        "Mentored development teams on DevOps best practices",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"],
    },
    {
      title: "System Administrator",
      company: "Previous Role",
      location: "Sri Lanka",
      duration: "2020 - 2023",
      type: "Full-time",
      description: "Managed Linux systems and implemented automation solutions.",
      achievements: [
        "Maintained high availability of critical systems",
        "Implemented monitoring and alerting solutions",
        "Automated routine maintenance tasks",
        "Improved system security and compliance",
      ],
      technologies: ["Linux", "Bash", "Python", "Monitoring Tools", "Networking"],
    },
  ]

  const projects = [
    {
      title: "🗑️ trash-cli",
      description: "A simple, safe, and scriptable command-line trash manager for Linux. Instead of deleting files permanently with rm, use trash-cli to move them to a recoverable trash bin — just like your desktop environment.",
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://github.com/anuradha99n/trash-cli",
      githubUrl: "https://github.com/anuradha99n/trash-cli",
    },
    {
      title: "Dataset Integration",
      description: "My ML research dataset integration program. Integrates multiple protein data files into a single CSV for analysis.",
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://github.com/anuradha99n/dataset_integration",
      githubUrl: "https://github.com/anuradha99n/dataset_integration",
    },
    {
      title: "Kubernetes CI/CD Pipeline",
      description: "Automated deployment pipeline using Jenkins, Docker, and Kubernetes with monitoring and alerting.",
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
    },

    
  ]

  const articles = [
    {
      title: "🗑️ trash-cli: A Safer Alternative to rm for Terminal Users",
      snippet: "Learn how trash-cli can help you avoid accidental file deletions and safely manage your files from the terminal.",
      url: "https://medium.com/@anuradha99n/%EF%B8%8F-trash-cli-a-safer-alternative-to-rm-for-terminal-users-414ededdaf0a",
    },
    {
      title: "Mastering Kubernetes Deployments",
      snippet:
        "A comprehensive guide to deploying applications on Kubernetes with best practices and security considerations.",
      url: "#",
    },
    {
      title: "Infrastructure as Code with Terraform",
      snippet: "Learn how to manage cloud infrastructure efficiently using Terraform modules and state management.",
      url: "#",
    },
    {
      title: "Linux System Administration Tips",
      snippet: "Essential Linux commands and system administration techniques for DevOps professionals.",
      url: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">Anuradha</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-slate-800"
                      : "text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-indigo-950/20"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="DevOps Background"
          fill
          className="object-cover opacity-10"
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Hi, I'm Anuradha
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
            <span>{typedText}</span>
            <span className="animate-pulse text-blue-400">|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            DevOps Engineer passionate about cloud infrastructure, automation, and scalable solutions.
          </p>
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-colors duration-200"
          >
            View My Projects
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 mb-8 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover border-4 border-blue-400"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm a passionate DevOps Engineer with experience in cloud infrastructure, automation, and system
                administration. I enjoy working with modern technologies to build scalable and reliable systems. My
                expertise includes Linux administration, containerization, and infrastructure as code.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors duration-200">
                  <Cloud className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Infrastructure as Code</h3>
                  <p className="text-sm text-gray-400">Terraform, CloudFormation</p>
                </div>

                <div className="text-center p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-indigo-400 transition-colors duration-200">
                  <Monitor className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">System Monitoring</h3>
                  <p className="text-sm text-gray-400">Prometheus, Grafana</p>
                </div>

                <div className="text-center p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors duration-200">
                  <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">CI/CD Automation</h3>
                  <p className="text-sm text-gray-400">Jenkins, GitHub Actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My journey in DevOps, Cloud Infrastructure, and System Administration
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-700 hover:border-blue-400 transition-colors duration-200"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-blue-400 mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300">
                        <span className="font-semibold text-indigo-400">{exp.company}</span>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <span className="text-gray-400 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                      <Badge variant="outline" className="border-blue-400 text-blue-400 w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.duration}
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <Code className="h-4 w-4 mr-2 text-green-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-slate-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <Card className="mt-8 bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-green-400 text-center">Education & Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Continuous Learning</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-blue-400">Self-taught DevOps Engineer</h5>
                      <p className="text-gray-400">Continuous learning through online courses and hands-on projects</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-indigo-400">Open Source Contributions</h5>
                      <p className="text-gray-400">Active contributor to DevOps and automation projects</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Skills & Expertise</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-green-400 mr-2" />
                      <div>
                        <h5 className="font-semibold text-green-400">Cloud Platforms</h5>
                        <p className="text-sm text-gray-500">AWS, GCP, Azure</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-400 mr-2" />
                      <div>
                        <h5 className="font-semibold text-blue-400">Container Orchestration</h5>
                        <p className="text-sm text-gray-500">Docker, Kubernetes</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-indigo-400 mr-2" />
                      <div>
                        <h5 className="font-semibold text-indigo-400">Infrastructure Automation</h5>
                        <p className="text-sm text-gray-500">Terraform, Ansible</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specialized in modern DevOps practices and cloud-native technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS, GCP, Azure", color: "blue" },
              { icon: Container, title: "Containerization", desc: "Docker, Kubernetes", color: "indigo" },
              { icon: Settings, title: "Automation", desc: "Ansible, Terraform", color: "cyan" },
              { icon: Shield, title: "Security", desc: "DevSecOps, Compliance", color: "blue" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors duration-200"
              >
                <item.icon className={`h-12 w-12 text-${item.color}-400 mx-auto mb-4`} />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-slate-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <tech.icon className="h-4 w-4 mr-2" />
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent DevOps and infrastructure projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-700 hover:border-blue-400 transition-colors duration-200"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                      asChild
                      disabled={!project.demoUrl || project.demoUrl === '#'}
                    >
                      <Link href={project.demoUrl && project.demoUrl !== '#' ? project.demoUrl : '#'} tabIndex={project.demoUrl && project.demoUrl !== '#' ? 0 : -1} aria-disabled={!project.demoUrl || project.demoUrl === '#'}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 bg-transparent transition-colors duration-200"
                      asChild
                      disabled={!project.githubUrl || project.githubUrl === '#'}
                    >
                      <Link href={project.githubUrl && project.githubUrl !== '#' ? project.githubUrl : '#'} tabIndex={project.githubUrl && project.githubUrl !== '#' ? 0 : -1} aria-disabled={!project.githubUrl || project.githubUrl === '#'}>
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub & Articles Section */}
      <section id="articles" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* GitHub Section */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-400">GitHub</h2>
                <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
              </div>

              <div className="text-center p-8 bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors duration-200">
                <Github className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Check out my repositories</h3>
                <p className="text-gray-300 mb-6">
                  Explore my open-source projects, automation scripts, and infrastructure code.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200" asChild>
                  <Link href="https://github.com/anuradha99n" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Visit GitHub Profile
                  </Link>
                </Button>
              </div>
            </div>

            {/* Articles Section */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-indigo-400">Articles</h2>
                <div className="w-16 h-1 bg-indigo-400 mx-auto mb-6"></div>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-indigo-400 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-indigo-400">{article.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{article.snippet}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-gray-300 hover:border-indigo-400 hover:text-indigo-400 bg-transparent transition-colors duration-200"
                      asChild
                    >
                      <Link href={article.url} target={article.url.includes('medium.com') ? '_blank' : undefined} rel={article.url.includes('medium.com') ? 'noopener noreferrer' : undefined}>
                        Read More
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss your DevOps challenges and how I can help optimize your infrastructure
            </p>
          </div>

          <Card className="bg-slate-900 border-slate-700">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Anuradha</h3>
            <p className="text-gray-400 mb-6">DevOps Engineer & Linux Enthusiast</p>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                { href: "https://github.com/anuradha99n", icon: Github },
                { href: "https://www.linkedin.com/in/anuradha99/", icon: Linkedin },
                { href: "mailto:contact@example.com", icon: Mail },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-gray-500 text-sm">© {year ?? ""} Anuradha. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
