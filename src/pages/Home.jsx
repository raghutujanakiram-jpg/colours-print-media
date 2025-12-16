import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServicesGrid from "../components/ServicesGrid";
import ClientsGrid from "../components/ClientsGrid";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle
        title="What We Do"
        subtitle="Everything your brand needs — executed flawlessly."
      />
      <ServicesGrid />
      <ClientsGrid />
      <Testimonials />
    </>
  );
}