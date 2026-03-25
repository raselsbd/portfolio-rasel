import { Trophy, Award, Medal, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Achievement() {
  const achievements = [
    {
      title: "National Robotics Championship 2024",
      position: "14th place",
      icon: Trophy,
      gradient: "from-yellow-500 via-yellow-400 to-yellow-600",
      glowColor: "shadow-yellow-500/50",
      description: "First place in autonomous robot navigation challenge. Competed against 45+ teams from universities nationwide.",
      date: "March 2024",
      organizer: "IUBAT Innovation and Enterpner Society",
      prize: "Grand Prize + $000",
    },
   // {
    //  title: " Robotics Competition Bangladesh",
    //  position: "Cha",
    //  icon: Trophy,
     // gradient: "from-yellow-500 via-amber-400 to-orange-500",
     // glowColor: "shadow-yellow-500/50",
     // description: "Won first position in line following and obstacle avoidance category with innovative sensor fusion approach.",
     // date: "January 2024",
     // organizer: "IEEE Bangladesh Section",
     // prize: "Gold Medal + Certificate",
  //  },
    {
      title: "NASA Space Apps Challenge Dhaka",
      position: "",
      icon: Medal,
      gradient: "from-slate-400 via-slate-300 to-slate-500",
      glowColor: "shadow-slate-400/50",
      description: "Developed ML-based Air quality monitoring system. Selected among top 3 teams from 600+ participating teams.",
      date: "October 2025",
      organizer: "NASA & Space Apps Global",
      prize: "",
    },
    {
      title: "National Science Week, Pancbibi Thana",
      position: "1st-runnerup",
      icon: Trophy,
      gradient: "from-yellow-400 via-yellow-500 to-amber-600",
      glowColor: "shadow-yellow-500/50",
      description: "Built using water as renewable energy. Won Best Innovation and Best Technical Implementation awards.",
      date: "September 2018",
      organizer: "Panchbibi thana , Joypurhat",
      prize: "1st-runnerup Trophy",
    },
    /*{
      title: "Bangladesh IoT Challenge",
      position: "Runner-up",
      icon: Medal,
      gradient: "from-slate-300 via-gray-300 to-slate-400",
      glowColor: "shadow-slate-400/50",
      description: "Created smart home automation system with energy optimization. Recognized for innovative hardware design.",
      date: "July 2023",
      organizer: "IoT Bangladesh Foundation",
      prize: "Runner-up Trophy + $800",
    },
    {
      title: "Inter-University Programming Contest",
      position: "Champion",
      icon: Award,
      gradient: "from-amber-500 via-yellow-400 to-yellow-500",
      glowColor: "shadow-amber-500/50",
      description: "Secured first position solving complex algorithms and data structure problems. Perfect score in final round.",
      date: "May 2023",
      organizer: "Bangladesh Computer Council",
      prize: "Gold Medal + Scholarship",
    },
    {
      title: "AI/ML Innovation Challenge",
      position: "Runner-up",
      icon: Star,
      gradient: "from-gray-400 via-slate-300 to-gray-500",
      glowColor: "shadow-gray-400/50",
      description: "Developed computer vision model for medical image analysis. Achieved 94% accuracy in disease detection.",
      date: "April 2023",
      organizer: "Bangladesh AI Association",
      prize: "Silver Medal + Mentorship",
    },
    {
      title: "Maker Faire Dhaka - Best Project",
      position: "Champion",
      icon: Trophy,
      gradient: "from-yellow-600 via-yellow-400 to-amber-500",
      glowColor: "shadow-yellow-500/50",
      description: "Showcased autonomous delivery robot with real-time tracking. Awarded Best Project among 100+ exhibits.",
      date: "December 2022",
      organizer: "Maker Faire International",
      prize: "Best Project Award + $1000",
    },*/
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements & Awards
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition for excellence in robotics, programming, and innovation
            </p>
          </div>

          {/* Achievement cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isChampion = achievement.position === "Champion";
              
              return (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 ${
                    isChampion ? "border-yellow-500/30" : "border-slate-400/30"
                  } bg-card group relative overflow-hidden`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                  ></div>

                  <div className="relative space-y-4">
                    {/* Icon and position badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${achievement.glowColor}`}
                      >
                        <Icon className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                      <Badge
                        className={`${
                          isChampion
                            ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-yellow-600"
                            : "bg-gradient-to-r from-slate-400 to-gray-500 text-white border-slate-500"
                        } border-2 shadow-lg`}
                      >
                        {achievement.position}
                      </Badge>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.organizer}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {achievement.description}
                    </p>

                    {/* Prize */}
                    <div className="bg-muted/50 rounded-xl p-3 space-y-1">
                      <p className="text-xs text-muted-foreground">Prize</p>
                      <p className="text-sm font-medium">{achievement.prize}</p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {achievement.date}
                      </span>
                      {isChampion && (
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Stats summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 text-center bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/20">
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">0</p>
              <p className="text-sm text-muted-foreground">Championships</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-slate-400/10 to-gray-400/10 border-slate-400/20">
              <Medal className="h-8 w-8 text-slate-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-slate-600 dark:text-slate-400">1</p>
              <p className="text-sm text-muted-foreground">Runner-up</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
              <p className="text-sm text-muted-foreground">Total Awards</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
              <Star className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">$0K+</p>
              <p className="text-sm text-muted-foreground">Prize Money</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
