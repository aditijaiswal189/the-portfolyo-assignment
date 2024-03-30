import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
// import ContactPink from "./Components/ContactPink";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />

      <Testimonial />
      <ContactForm />
      {/* <ContactPink /> */}
    </div>
  );
}
export default App;
