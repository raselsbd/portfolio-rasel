import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Autonomous Line Following Robot",
      description: "Developed a self-navigating robot using ROS2, implementing SLAM for mapping and localization. Features obstacle avoidance and path planning algorithms.",
      image: "https://images.unsplash.com/photo-1612338762643-298feee70520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MTU4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["C++", "Computer Vision", "PID"],
      githubUrl: "https://github.com/raselsbd/Robotics-and-IoT-projects-by-Rasel/tree/main/Prototype/Line%20Following%20robot",
      liveUrl: "#",
    },
    {
      title: "Smart IoT Home System",
      description: "Created an integrated home automation system with ESP32 microcontrollers, controlling lighting, temperature, and security with a mobile app.",
      image: "https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NDA3NDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["IoT", "ESP32", "MQTT", "Webserver"],
      githubUrl: "https://github.com/raselislam/smart-home",
      liveUrl: "#",
    },
    {
      title: "Raspberry pi Offline voice assistant",
      description: "Built a offline voice assistant based on rspberry pi and NLP, rapidFuzz , python base project.",
      image: "./documents/voice-assistant.jpg",
      tags: ["Python", "Raspberry pi", "RapidFuzz", "NLP", "VOSK"],
      githubUrl: "https://github.com/raselsbd/Raspberry-pi-voice-assistant-with-rapidFuzz-python-yml-",
      liveUrl: "#",
    },
    {
      title: "Mars Rover Prototype",
      description: "Developed a autonomous  control system using  recognition object , movement and detect sound , Humidity, Tempreture and show on board display.",
      image: "./documents/mars-prototype.jpg",
      tags: ["Mars Rover", "C++", "DHT 22","Sound Sensor","Robotics"],
      githubUrl: "https://github.com/raselsbd/Robotics-and-IoT-projects-by-Rasel/tree/main/Marse%20rover%20proototype",
      liveUrl: "#",
    },
   /* {
      title: "ML Model Deployment Platform",
      description: "Created a web platform for deploying and managing machine learning models with REST APIs, supporting multiple frameworks.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2NDA3MzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Flask", "Docker", "ML", "REST API"],
      githubUrl: "https://github.com/raselislam/ml-platform",
      liveUrl: "#",
    },*/
    {
      title: "IoT Sensor Network",
      description: "Designed and deployed a wireless sensor network for environmental monitoring using LoRaWAN technology and cloud integration.",
      image: "https://images.unsplash.com/photo-1746017187853-936e4c4e4895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2VzJTIwY2lyY3VpdHxlbnwxfHx8fDE3NjQxNjY3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["LoRaWAN", "IoT", "Cloud", "Sensors"],
      githubUrl: "https://github.com/raselislam/sensor-network",
      liveUrl: "#",
    },
  ];
  {/* See All Projects button */}
    <div className="text-center">
      <Button
         asChild
        size="lg"
     className="mt-8 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <a
      href="https://github.com/raselsbd"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="mr-2 h-5 w-5" />
      See All Projects
    </a>
  </Button>
</div>
  
  return (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in robotics, IoT, and AI development
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card group"
              style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-xl"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ✅ See All Projects button — ADDED HERE */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <a
              href="https://github.com/raselsbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              See All Projects
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
}
