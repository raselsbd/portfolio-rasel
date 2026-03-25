import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with ROS2: A Beginner's Guide",
      excerpt: "Learn the fundamentals of Robot Operating System 2 and build your first autonomous robot. This comprehensive guide covers installation, basic concepts, and a simple navigation project.",
      date: "Nov 15, 2024",
      readTime: "8 min read",
      category: "Robotics",
      tags: ["ROS2", "Tutorial", "Robotics"],
      image: "https://images.unsplash.com/photo-1612338762643-298feee70520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MTU4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Participate Robotics fest",
      excerpt: "Security is crucial in IoT development. Explore authentication methods, encryption protocols, and secure communication patterns for your IoT projects.",
      date: "Nov 13, 2025",
      readTime: "6 min read",
      category: "Line Following Competition ",
      tags: ["PID", "Motordriving", "Precision"],
      image: "./documents/blog-2.jpg",
    },
     {
      title: "National Science Fest 25",
      excerpt: "This fest i am the Judge and i am judging project showcasing segment and total project are 130+",
      date: "Oct 11, 2025",
      readTime: "10 min read",
      category: "Judge",
      tags: ["Machine Learning", "Prototype", "Projects"],
      image: "./documents/blog-3.jpg",
    },
    {
      title: "Machine Learning on Edge Devices: TinyML",
      excerpt: "Discover how to deploy neural networks on microcontrollers. Learn about model optimization, quantization, and practical applications of TinyML.",
      date: "Oct 12, 2024",
      readTime: "10 min read",
      category: "AI/ML",
      tags: ["Machine Learning", "Edge Computing", "TinyML"],
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2NDA3MzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "My Journey in Robotics Research",
      excerpt: "A personal reflection on my path from curious student to robotics researcher. Challenges faced, lessons learned, and advice for aspiring roboticists.",
      date: "Sep 25, 2024",
      readTime: "5 min read",
      category: "Personal",
      tags: ["Career", "Research", "Inspiration"],
      image: "https://images.unsplash.com/photo-1633169420455-97eb1405fc51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MDcyMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Advance Robotics Workshop",
      excerpt: "This workshop i am as a speeker and teech how to work sensor, process signal , sensor to microcontroler data send and final Output. ",
      date: "October 18, 2025",
      readTime: "2 min read",
      category: "Instructor",
      tags: ["Arduino", "Navigation", "Algorithms","Sensor"],
      image: "./documents/blog-7.jpg",
    },
    {
      title: "Basic Robotics Workshop",
      excerpt: "This workshop i am as a speeker and teech how to work sensor, process signal , sensor to microcontroler data send and final Output. ",
      date: "Sep 8, 2023",
      readTime: "2 min read",
      category: "Instructor",
      tags: ["Arduino", "Navigation", "Algorithms"],
      image: "./documents/blog-4.jpg",
    },
    {
      title: "Smart Home Automation with ESP32",
      excerpt: "Step-by-step guide to building a complete home automation system. From circuit design to mobile app development, covering all aspects of the project.",
      date: "Aug 20, 2024",
      readTime: "15 min read",
      category: "IoT",
      tags: ["ESP32", "Smart Home", "Tutorial"],
      image: "https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NDA3NDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog & Articles
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and experiences in robotics, IoT, and AI
            </p>
          </div>

          {/* Blog posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card group flex flex-col"
                style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Post image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge
                    className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                    variant="secondary"
                  >
                    {post.category}
                  </Badge>
                </div>

                {/* Post content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title and excerpt */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="rounded-full text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read more button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-accent/10"
                    asChild
                  >
                    <a href="#">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
