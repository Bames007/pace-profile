import Header from "./home/Header";
import Hero from "./home/Hero";
import About from "./home/About";
import Services from "./home/Services";
import Projects from "./home/Projects";
import Testimonials from "./home/Testimonials";
import Contact from "./home/Contact";
import Footer from "./home/Footer";
import ProjectVisualizer from "./home/ProjectVisualizer";
import AIConsultation from "./home/AIConsultations";
import SustainableTech from "./home/SustainableTech";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <AIConsultation />
      <SustainableTech />
      <ProjectVisualizer />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
