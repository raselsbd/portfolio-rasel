import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText, Check, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('SERVICE_ID_PLACEHOLDER'); // Replace with your actual Service ID
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your actual EmailJS details
      await emailjs.send(
        'SERVICE_ID_PLACEHOLDER', // Replace with your Service ID
        'TEMPLATE_ID_PLACEHOLDER', // Replace with your Template ID
        {
          to_email: 'raselislam07575@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setStatus('success');
      setStatusMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
      console.error('EmailJS error:', error);
      
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raselislam07575@gmail.com",
      href: "raselislam07575@gmail.com",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1306512656",
      href: "tel:+8801306512656",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/raselsbd",
      username: "@raselislam",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/-raselislam25",
      username: "raselislam25",
    },
    {
      icon: FileText,
      label: "ResearchGate",
      href: "https://researchgate.net/profile/raselislam",
      username: "Rasel Islam",
    },
    {
      icon: Mail,
      label: "Email",
      href: "raselislam07575@gmail.com",
      username: "raselislam07575@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="p-8 border-2 bg-card" style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-xl resize-none"
                  />
                </div>

                {status !== 'idle' && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    status === 'success' 
                      ? 'bg-green-500/20 text-green-700 dark:text-green-400' 
                      : 'bg-red-500/20 text-red-700 dark:text-red-400'
                  }`}>
                    {status === 'success' ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm">{statusMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact info and social */}
            <div className="space-y-8">
              {/* Contact info cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-lg transition-all duration-300 border-2 bg-card group"
                      style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                    >
                      <a
                        href={info.href}
                        className="flex items-center gap-4"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Card
                        key={index}
                        className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 bg-card group"
                        style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center text-center gap-2"
                        >
                          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {social.label}
                            </p>
                            <p className="text-xs font-medium truncate max-w-full">
                              {social.username}
                            </p>
                          </div>
                        </a>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="p-4 border-2 bg-card" style={{ borderColor: 'hsla(293, 100%, 51%, 1.00)' }}>
                <div className="relative h-48 bg-muted rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
