import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import InfrastructurePreview from "../components/home/InfrastructurePreview";
import ImpactPreview from "../components/home/ImpactPreview";
// import ContactCTA from "../components/home/ContactCTA";
// import LogoModel from "../components/home/LogoModel";

function Home() {
  return (
    <>
    {/* <LogoModel /> */}
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <InfrastructurePreview />
      <ImpactPreview />
      {/* <ContactCTA /> */}
    </>
  );
}

export default Home;
