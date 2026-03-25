import { Trophy, Users, Presentation, Heart } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Activities() {
  const activities = [
    {
      category: "Club Leadership",
      icon: Users,
      gradient: "from-blue-600 to-cyan-600",
      items: [
        {
          title: "Convenor - DIU Robotics Club",
          period: "Januyary 2025 - Present",
          description: "Leading a team of 50+ members, organizing workshops and competitions. Successfully hosted the annual RoboCup event.",
        },
        {
          title: "Vice President - Computer Programming Club(CPC)",
          period: "March 2025 - Present",
          description: "Coordinated technical workshops and seminars. Managed collaboration with industry partners.",
        },
      ],
    },
    /*{
      category: "Competitions & Hackathons",
      icon: Trophy,
      gradient: "from-purple-600 to-pink-600",
      items: [
        {
          title: "1st Place - National Robotics Challenge",
          period: "2024",
          description: "Won first prize for autonomous robot navigation. Competed against 30+ teams from universities across Bangladesh.",
        },
        {
          title: "Runner Up - NASA Space Apps Challenge",
          period: "2023",
          description: "Developed IoT solution for agricultural monitoring. Selected among top teams in Dhaka hub.",
        },
        {
          title: "Winner - DIU Tech Fest Hackathon",
          period: "2023",
          description: "Built AI-powered traffic management system. Won best innovation award.",
        },
      ],
    },*/
    {
      category: "Workshops & Training",
      icon: Presentation,
      gradient: "from-green-600 to-teal-600",
      items: [
        {
          title: "Advance Robotics Workshop Instructor",
          period: "2025",
          description: "Conducted 1-day intensive workshop on Robot Operating System. Trained 40+ students.",
        },
        {
          title: "Begginer for Robotics and IoT  Bootcamp",
          period: " November 2024",
          description: "Organized and taught IoT development fundamentals. Hands-on projects with ESP32 and sensors.",
        },
       {
          title: "Day Long Robotics and IoT Workshop, Coxbazar",
          period: "February 2024",
          description: "Teaching how to work sensors, acctuators, microntroller Then build a simmple mars rover prototype. This group is 12 active members .",
        },
      ],
    },
    {
      category: "Volunteer Work",
      icon: Heart,
      gradient: "from-orange-600 to-red-600",
      items: [
        {
          title: "Society for popularization of Science, Bangladesh(SBSP)",
          period: "2023 - Present",
          description: "Manegment and seminar, bootcamp organized and speeker. Reached 10000+ students..",
        },
        {
          title: "Meetup Canpign, Volunteer - DIU",
          period: "2022",
          description: "Provided technical assistance during online service, students portal  pandemic. Helped 200+ students with setup.",
        },
      ],
    },
  ];

  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Co-curricular Activities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Active involvement in clubs, competitions, and community service
            </p>
          </div>

          {/* Activities sections */}
          <div className="space-y-10">
            {activities.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <div key={sectionIndex} className="space-y-6">
                  {/* Category header */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{section.category}</h3>
                  </div>

                  {/* Activity items */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card"
                        style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                      >
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold">{item.title}</h4>
                            <Badge
                              variant="secondary"
                              className="rounded-full flex-shrink-0"
                            >
                              {item.period}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
