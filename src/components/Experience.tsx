import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      role: "Robotics Mentor",
      company: "Space innovation Camp",
      location: "Karwan bazar, Dhaka, Bangladesh",
      period: "Jun 2023 - Present",
      description: "Working on autonomous navigation systems and multi-robot coordination. Developing ROS2-based applications for robot control and sensor integration.",
      achievements: [
        "Implemented improving students knowledge",
        "Developed Python libraries for sensor data processing",
        "Published research paper on multi-agent path planning",
      ],
      type: "research",
    },
   
    
   /* {
      role: "Machine Learning Intern",
      company: "DataVision Analytics",
      location: "Remote",
      period: "Jan 2023 - May 2023",
      description: "Built and deployed machine learning models for computer vision applications. Worked with TensorFlow, PyTorch, and production ML pipelines.",
      achievements: [
        "Developed object detection models with 92% accuracy",
        "Optimized inference time by 50% using model quantization",
        "Created data annotation pipeline processing 10K+ images",
      ],
      type: "industry",
    },*/
    {
      role: "Tutor ",
      company: "Asa coching Center",
      location: "Dhaka, Bangladesh",
      period: "Sep 2023 - Dec 2023",
      description: "Assisted in teaching Science, Math , English. Conducted  sessions and helped students with proper assignments.",
      achievements: [
        "Mentored 10+ students in Science group student",
        "Prepared course materials and  exercises",
        "Achieved 4.0/5 student satisfaction rating",
      ],
      type: "teaching",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "research":
        return "from-blue-600 to-cyan-600";
      case "industry":
        return "from-purple-600 to-pink-600";
      case "teaching":
        return "from-green-600 to-teal-600";
      default:
        return "from-gray-600 to-gray-800";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise through research, internships, and teaching
            </p>
          </div>

          {/* Experience timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary ml-8"></div>

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background z-10"></div>

                  {/* Content */}
                  <Card className="md:ml-20 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 bg-card" style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${getTypeColor(
                            exp.type
                          )} flex items-center justify-center`}
                        >
                          <Briefcase className="h-7 w-7 text-white" />
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <p className="font-medium text-foreground/90">
                              {exp.company}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="font-medium">Key Achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
