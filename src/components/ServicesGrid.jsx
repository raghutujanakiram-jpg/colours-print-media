const services = [
  "Creative Design & Artwork",
  "Offset Printing",
  "Digital Printing",
  "Screen Printing",
  "Flex & Large-Format Printing",
  "Promotional Materials",
  "Multi-Language Translation",
  "Professional Typing Services",
];

export default function ServicesGrid() {
  return (
    <section>
      <div className="section-title">
        <h2>Our Services</h2>
        <p>Complete print and promotional solutions under one roof.</p>
      </div>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s}>
            <h3>{s}</h3>
            <p>Reliable execution with commercial-grade quality.</p>
          </div>
        ))}
      </div>
    </section>
  );
}