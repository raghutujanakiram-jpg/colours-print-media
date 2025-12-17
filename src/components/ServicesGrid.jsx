const services = [
  { title: "Creative Design & Artwork", image: "/services/design.jpg" },
  { title: "Offset Printing", image: "/services/offset.jpg" },
  { title: "Digital Printing", image: "/services/digital.jpg" },
  { title: "Screen Printing", image: "/services/screen.jpg" },
  { title: "Flex & Large-Format Printing", image: "/services/flex.jpg" },
  { title: "Promotional Materials", image: "/services/promo.jpg" },
];

export default function ServicesGrid() {
  return (
    <section>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            {/* FIXED MEDIA CONTAINER */}
            <div className="service-media">
              <img src={s.image} alt={s.title} loading="lazy" />
            </div>

            <h3>{s.title}</h3>
            <p>Commercial-grade quality with reliable delivery.</p>
          </div>
        ))}
      </div>
    </section>
  );
}