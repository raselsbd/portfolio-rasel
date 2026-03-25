import { FileText, ExternalLink, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Research() {
  const publications = [
    {
      title: "Multi-Agent Path Planning for Warehouse Automation Using Reinforcement Learning",
      authors: "MD. Rasel Islam",
      venue: "",
      year: "",
      status: "Under review",
      abstract: "This paper presents a novel approach to multi-agent path planning in warehouse environments using deep reinforcement learning...",
      tags: ["Robotics", "RL", "Multi-Agent"],
      pdfUrl: "#",
      citationUrl: "#",
    },
    
    /*{
      title: "Real-Time Object Detection and Tracking for Autonomous Vehicles",
      authors: "MD.Rasel Islam",
      venue: "",
      year: "",
      status: "Under review",
      abstract: "An efficient real-time object detection system designed specifically for autonomous vehicle applications with low latency...",
      tags: ["Computer Vision", "Autonomous Vehicles", "Deep Learning"],
      pdfUrl: "#",
      citationUrl: "#",
    },*/
  ];

  const ongoingResearch = [
    {
      title: "ML driven WaterQuality Assurence ",
      description: "Developing coordinated multi-robot systems for search and rescue operations in disaster scenarios.",
      tags: ["Swarm Robotics", "Multi-Agent Systems"],
    },
    {
      title: "Edge AI for Industrial IoT",
      description: "Implementing machine learning models on edge devices for real-time industrial monitoring and predictive maintenance.",
      tags: ["Edge Computing", "Industrial IoT", "ML"],
    },
  ];

  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Research & Publications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contributing to the advancement of robotics and AI through academic research
            </p>
          </div>

          {/* Published/Under Review Papers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Publications</h3>
            {publications.map((paper, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 bg-card"
                style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start gap-3">
                        <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold">{paper.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Users className="h-4 w-4" />
                            <span>{paper.authors}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={paper.status === "Published" ? "default" : "secondary"}
                      className="rounded-full"
                    >
                      {paper.status}
                    </Badge>
                  </div>

                  {/* Venue and year */}
                  <div className="text-sm">
                    <span className="font-medium">{paper.venue}</span>
                    <span className="text-muted-foreground"> • {paper.year}</span>
                  </div>

                  {/* Abstract */}
                  <p className="text-sm text-muted-foreground">{paper.abstract}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl"
                      asChild
                    >
                      <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        PDF
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl"
                      asChild
                    >
                      <a href={paper.citationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Citation
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Ongoing Research */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Ongoing Research</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {ongoingResearch.map((research, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card"
                  style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                >
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">{research.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {research.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {research.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
