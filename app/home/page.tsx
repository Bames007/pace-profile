import About from "./About";
import AIConsultation from "./AIConsultations";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import ProjectVisualizer from "./ProjectVisualizer";
import Services from "./Services";
import SustainableTech from "./SustainableTech";
import Testimonials from "./Testimonials";
export default function HomePage() {
  return (
    <main className="relative">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="ai-consultation">
        <AIConsultation />
      </section>
      <section id="sustainable-tech">
        <SustainableTech />
      </section>
      <section id="project-visualizer">
        <ProjectVisualizer />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
