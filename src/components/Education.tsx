import { GraduationCap, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Education() {
  const educationData = [
    {
      degree: "BSc in CSE",
      fullDegree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Dhaka International University",
      location: "Dhaka, Bangladesh",
      period: "April 2022 - Present",
      description: "Specializing in CS, Embedded Systems, AI, and IoT systems",
      cgpa: "3.62/4.00",
      gradient: "from-blue-600 via-cyan-500 to-blue-700",
      icon: GraduationCap,
      achievements: [
        "Best  Project -10 semesters",
      
      ],
    },
    {
      degree: "HSC",
      fullDegree: "Higher Secondary Certificate",
      institution: "Jashore Govt. College, Jashore",
      location: "Jashore, Bangladesh",
      period: "2019 - 2021",
      description: "Science Group - Physics, Chemistry,Biology, Mathematics",
      cgpa: "4.50/5.00",
      gradient: "from-purple-600 via-pink-500 to-purple-700",
      icon: Award,
      achievements: [
        "Scholarship Recipient",
        "Science Olympiad  Winner",
        "ICT Quiz 3rd place amnog 400 - 2019",
      ],
    },
    {
      degree: "SSC",
      fullDegree: "Secondary School Certificate",
      institution: "Baramanika High School",
      location: "Panchbibi, Joypurhat, Bangladesh",
      period: "2017 - 2019",
      description: "Science Group - General Science Studies",
      cgpa: "4.61/5.00",
      gradient: "from-green-600 via-teal-500 to-green-700",
      icon: BookOpen,
      achievements: [
        "School regular Student Award 2018",
        "Math Olympiad Champion 2019",
        "Science Olympiad Upazila Champion 2018" ,
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Educational Background
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic journey of excellence and continuous learning
            </p>
          </div>

          {/* Education grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 bg-card"
                  style={{
                    borderColor: `hsl(var(--primary) / 0.2)`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${edu.gradient} opacity-20 rounded-bl-full`}
                  ></div>

                  <div className="relative p-8 space-y-6">
                    {/* Icon and badge */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge
                        className={`bg-gradient-to-r ${edu.gradient} text-white border-0 shadow-lg`}
                      >
                        {edu.degree}
                      </Badge>
                    </div>

                    {/* Degree info */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold">{edu.fullDegree}</h3>
                      <p className="font-semibold text-foreground/90">
                        {edu.institution}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>

                    {/* CGPA/GPA highlight */}
                    <div
                      className={`bg-gradient-to-r ${edu.gradient} p-4 rounded-xl text-center transform group-hover:scale-105 transition-transform`}
                    >
                      <p className="text-sm text-white/90 mb-1">Result</p>
                      <p className="text-2xl font-bold text-white">{edu.cgpa}</p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <p className="text-sm font-semibold">Key Achievements:</p>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.gradient} mt-1.5 flex-shrink-0`}
                            ></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
