export default function ServicesGrid() {
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

  return (
    <section className="grid">
      {services.map((service, index) => (
        <div key={index} className="card">
          <h3>{service}</h3>
        </div>
      ))}
    </section>
  );
}