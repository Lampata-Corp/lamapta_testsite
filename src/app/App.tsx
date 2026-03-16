import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AudienceSection } from "./components/AudienceSection";
import { CaseStudies } from "./components/CaseStudies";
import { OpenScience } from "./components/OpenScience";
import { HowWeWork } from "./components/HowWeWork";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <CaseStudies />
        <OpenScience />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
