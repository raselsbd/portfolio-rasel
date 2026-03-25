import { Briefcase, Award, Lightbulb, Code2 } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experience",
      description: "2+ years in robotics and IoT development",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Research",
      description: "Published papers in AI and robotics conferences",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Skills",
      description: "Proficient in Python, C++, and embedded systems",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Lightbulb,
      title: "Achievements",
      description: "Multiple hackathon wins and innovation awards",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Bio */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border-2" style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }} data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4">Bio</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate Computer Science & Engineering student at Dhaka International University,
                specializing in robotics, IoT, and artificial intelligence. My journey in technology began
                with a fascination for how machines can be programmed to think and act autonomously.
              </p>
              <p>
                Throughout my academic career, I have focused on bridging the gap between theoretical
                knowledge and practical applications. I have worked on numerous projects involving
                autonomous robots, smart IoT devices, and machine learning models that solve real-world
                problems.
              </p>
              <p>
                My research interests include multi-agent systems, computer vision, embedded AI, and
                human-robot interaction. I believe in continuous learning and staying updated with the
                latest advancements in technology to contribute meaningfully to the field of robotics
                and artificial intelligence.
              </p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card group"
                  style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="space-y-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${highlight.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
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
