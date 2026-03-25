import { useEffect, useState } from "react";
import { Github, Star, GitFork, Code2 } from "lucide-react";
import { Card } from "./ui/card";

interface GithubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  loading: boolean;
  error: string | null;
}

export function GithubStats() {
  const [stats, setStats] = useState<GithubStats>({
    publicRepos: 0,
    followers: 0,
    following: 0,
    totalStars: 0,
    totalForks: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(
          "https://api.github.com/users/raselsbd"
        );
        const userData = await userResponse.json();

        if (!userResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        // Fetch repos data for stars and forks
        const reposResponse = await fetch(
          "https://api.github.com/users/raselsbd/repos?per_page=100"
        );
        const reposData = await reposResponse.json();

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repos");
        }

        const totalStars = reposData.reduce(
          (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
          0
        );
        const totalForks = reposData.reduce(
          (sum: number, repo: any) => sum + (repo.forks_count || 0),
          0
        );

        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalStars,
          totalForks,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load GitHub stats",
        }));
      }
    };

    fetchGithubStats();
  }, []);

  const statItems = [
    {
      icon: Code2,
      label: "Public Repos",
      value: stats.publicRepos,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: stats.totalStars,
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      icon: GitFork,
      label: "Total Forks",
      value: stats.totalForks,
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Github,
      label: "Followers",
      value: stats.followers,
      gradient: "from-green-600 to-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GitHub Statistics
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My GitHub activity and contributions
            </p>
          </div>

          {stats.error ? (
            <Card className="p-8 text-center border-2 bg-card" style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}>
              <p className="text-muted-foreground">{stats.error}</p>
            </Card>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card group text-center"
                    style={{ borderColor: "hsla(293, 100%, 51%, 1.00)" }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="space-y-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform mx-auto`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="space-y-2">
                        {stats.loading ? (
                          <div className="h-8 bg-muted rounded animate-pulse"></div>
                        ) : (
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {item.value}
                          </h3>
                        )}
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <a
                href="https://github.com/raselsbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                Visit my GitHub profile →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
