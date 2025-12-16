import SectionTitle from "../components/SectionTitle";

export default function MissionVision() {
  return (
    <>
      <SectionTitle title="Mission & Vision" />
      <section className="content split">
        <div>
          <h3>Our Mission</h3>
          <p>
            To deliver reliable, high-quality print and branding solutions that
            help businesses stand out and grow.
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>
            To become a preferred print and branding partner across India by
            continuously upgrading technology and service standards.
          </p>
        </div>
      </section>
    </>
  );
}