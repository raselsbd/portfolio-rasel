import { useEffect, useState } from "react";
import { Code2, Zap, Trophy, Users } from "lucide-react";
import { Card } from "./ui/card";

interface StatCounter {
  icon: React.ReactNode;
  value: number;
  label: string;
  gradient: string;
  suffix?: string;
}

export function StatsSection() {
  const [stats, setStats] = useState<StatCounter[]>([]);

  useEffect(() => {
    // Animate numbers on mount
    const targetStats = [
      {
        icon: <Code2 className="h-6 w-6" />,
        value: 15,
        label: "Projects Completed",
        gradient: "from-blue-600 to-cyan-600",
        suffix: "+",
      },
      {
        icon: <Trophy className="h-6 w-6" />,
        value: 8,
        label: "Hackathon Wins",
        gradient: "from-yellow-600 to-orange-600",
        suffix: "",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        value: 3,
        label: "Years Experience",
        gradient: "from-purple-600 to-pink-600",
        suffix: "+",
      },
      {
        icon: <Users className="h-6 w-6" />,
        value: 500,
        label: "GitHub Followers",
        gradient: "from-green-600 to-teal-600",
        suffix: "+",
      },
    ];

    let animationFrames: number[] = [];

    targetStats.forEach((stat, index) => {
      let currentValue = 0;
      const increment = stat.value / 50; // Animate over 50 frames
      
      const animate = () => {
        currentValue += increment;
        if (currentValue >= stat.value) {
          currentValue = stat.value;
        } else {
          animationFrames[index] = requestAnimationFrame(animate);
        }
        
        setStats((prev) => {
          const newStats = [...prev];
          newStats[index] = { ...stat, value: Math.floor(currentValue) };
          return newStats;
        });
      };

      setTimeout(() => {
        animationFrames[index] = requestAnimationFrame(animate);
      }, index * 200);
    });

    return () => {
      animationFrames.forEach((frame) => cancelAnimationFrame(frame));
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card group text-center"
                style={{ borderColor: "hsla(293, 100%, 51%, 1.00)" }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform mx-auto`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}{stat.suffix}
                    </h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
