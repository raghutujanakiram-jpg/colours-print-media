const clients = [
  { name: "Syngenta", logo: "/clients/syngenta.png" },
  { name: "Advanta", logo: "/clients/advanta.png" },
  { name: "JK Seeds", logo: "/clients/jk-seeds.png" },
  { name: "Siri Seeds", logo: "/clients/siri-seeds.png" },
  { name: "Shakti Seeds", logo: "/clients/shakti-seeds.png" },
  { name: "Needi Seeds", logo: "/clients/needi-seeds.png" },
  { name: "GARC", logo: "/clients/garc.png" },
];

export default function ClientsGrid() {
  return (
    <section>
      <div className="section-title">
        <h2>Trusted by Industry Leaders</h2>
        <p>Long-term partnerships across agriculture, seeds, and enterprise brands.</p>
      </div>

      <div className="clients-grid">
        {clients.map((c) => (
          <div className="client-logo" key={c.name}>
            <img src={c.logo} alt={c.name} />
          </div>
        ))}
      </div>
    </section>
  );
}