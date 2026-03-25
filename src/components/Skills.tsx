import { Bot, Cpu, Code, Brain, Microchip, Server, Terminal, Wifi } from "lucide-react";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Robotics",
      icon: Bot,
      gradient: "from-blue-600 to-cyan-600",
      skills: [ "Autonomous Navigation", "Kinematics", "Path Planning"],
    },
    {
      category: "IoT",
      icon: Wifi,
      gradient: "from-purple-600 to-pink-600",
      skills: ["LoRaWAN", "Arduino", "ESP32","ESP8266", "Sensor Integration"],
    },
    {
      category: "Programming",
      icon: Code,
      gradient: "from-green-600 to-teal-600",
      skills: ["Python", "C/C++", "Java"],
    },
    {
      category: "ML/AI",
      icon: Brain,
      gradient: "from-orange-600 to-red-600",
      skills: [ "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    },
    {
      category: "Embedded Systems",
      icon: Microchip,
      gradient: "from-indigo-600 to-purple-600",
      skills: [ "STM32", "Raspberry Pi", "RTOS", "Hardware Design","PCB Design"],
    },
    {
      category: "Web Development",
      icon: Terminal,
      gradient: "from-pink-600 to-rose-600",
      skills: [ "HTML","CSS", "MySQL"],
    },
    {
      category: "Data Science",
      icon: Server,
      gradient: "from-cyan-600 to-blue-600",
      skills: ["Pandas", "NumPy",  "Data Visualization", "Statistics"],
    },
    {
      category: "Tools & Platforms",
      icon: Cpu,
      gradient: "from-yellow-600 to-orange-600",
      skills: ["Git", "GitHub", "Linux", "VS Code", "CAD Software", "EasyEDA", "TinkerCAD"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of technical skills across multiple domains of computer science and engineering
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card group"
                  style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="space-y-4">
                    {/* Icon and title */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold">{category.category}</h3>
                    </div>

                    {/* Skills list */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
