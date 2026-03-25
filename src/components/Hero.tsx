import { Github, Linkedin, Mail, Phone, Download, FolderGit2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/raselsbd",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/-raselislam25",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "raselislam07575@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+8801700000000",
      label: "Phone",
    },
  ];

 // const handleDownloadCV = () => {
   // alert("CV download would start here. Please add your CV file.");
  //};
  const handleDownloadCV = () => {
  // Replace 'cv.pdf' with your actual filename if different
  const cvUrl = "/documents/Rasel-Islam-CV.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Rasel-Islam-CV.pdf"; // যে নামে ডাউনলোড হবে
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left order-1" data-aos="fade-right">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-lg text-muted-foreground px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Hi, I'm MD. RASEL ISLAM
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Robotics Researcher | IoT Developer | AI & ML Enthusiast
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                onClick={scrollToProjects}
                size="lg"
                variant="outline"
                className="rounded-xl border-2 hover:bg-accent/10"
              >
                <FolderGit2 className="mr-2 h-5 w-5" />
                My Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card hover:bg-accent/20 border border-border transition-all hover:scale-110 hover:shadow-lg group"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative flex justify-center lg:justify-end order-2" data-aos="fade-left">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <ImageWithFallback
                    src="./documents/Rasel2.jpg"
                    alt="MD. Rasel Islam"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-2xl -rotate-12 opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
