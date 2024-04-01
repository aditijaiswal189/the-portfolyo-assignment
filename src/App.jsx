/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
// import ContactPink from "./Components/ContactPink";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Testimonial from "./Components/Testimonial";
import Timeline from "./Components/Timeline";

function App() {
  const [portData, setPortData] = useState({});
  useEffect(function () {
    async function fetchPortolioData() {
      const res = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );

      const data = await res.json();
      setPortData(data.user);
      console.log(data.user);
    }
    fetchPortolioData();
  }, []);
  return (
    <div>
      <Hero portData={portData} />
      <About portData={portData} />
      <Services servicesData={portData.services} />
      <Skills skillsData={portData.skills} />
      {portData.projects && <Projects projectsData={portData?.projects} />}

      <Timeline timelineData={portData.timeline} />
      <Testimonial testimonialsData={portData.testimonials} />
      <ContactForm portData={portData} />
      {/* <ContactPink /> */}
    </div>
  );
}
export default App;
