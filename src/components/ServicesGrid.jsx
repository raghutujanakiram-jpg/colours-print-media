const services = [
  {
    title: "Creative Design & Artwork",
    image: "/services/design.jpg",
  },
  {
    title: "Offset Printing",
    image: "/services/offset.jpg",
  },
  {
    title: "Digital Printing",
    image: "/services/digital.jpg",
  },
  {
    title: "Screen Printing",
    image: "/services/screen.jpg",
  },
  {
    title: "Flex & Large-Format Printing",
    image: "/services/flex.jpg",
  },
  {
    title: "Promotional Materials",
    image: "/services/promo.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section>
      <div className="section-title">
        <h2>Our Services</h2>
        <p>End-to-end print and promotional execution.</p>
      </div>

      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <img src={s.image} alt={s.title} style={{ width: "100%", borderRadius: "6px" }} />
            <h3>{s.title}</h3>
            <p>Commercial-grade quality with reliable delivery.</p>
          </div>
        ))}
      </div>
    </section>
  );
}