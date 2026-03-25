import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { Experience } from "./components/Experience";
import { Achievement } from "./components/Achievement";
import { Activities } from "./components/Activities";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { SEO } from "./components/SEO";
import { StatsSection } from "./components/StatsSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { GithubStats } from "./components/GithubStats";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <About />
        <Education />
        <Skills />
        <Projects />
        <GithubStats />
        <Research />
        <Experience />
        <Achievement />
        <Activities />
        <Blog />
        <NewsletterSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}