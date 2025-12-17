import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServicesGrid from "../components/ServicesGrid";
import ClientsGrid from "../components/ClientsGrid";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle title="Our Services" subtitle="End-to-end print execution" />
      <ServicesGrid />
      <SectionTitle title="Our Clients" />
      <ClientsGrid />
      <SectionTitle title="Testimonials" />
      <Testimonials />
    </>
  );
}