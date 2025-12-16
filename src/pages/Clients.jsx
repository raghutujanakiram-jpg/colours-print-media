import SectionTitle from "../components/SectionTitle";
import ClientsGrid from "../components/ClientsGrid";

export default function Clients() {
  return (
    <>
      <SectionTitle
        title="Our Clients"
        subtitle="Trusted by leading brands across industries."
      />
      <ClientsGrid />
    </>
  );
}