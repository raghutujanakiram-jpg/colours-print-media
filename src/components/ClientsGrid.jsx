const clients = [
  {
    name: "Syngenta",
    logo: "/clients/syngenta.png",
    url: "https://www.syngenta.com/",
  },
  {
    name: "Advanta Seeds",
    logo: "/clients/advanta.png",
    url: "https://www.advantaseeds.com/",
  },
  {
    name: "JK Agri Genetics",
    logo: "/clients/jk-seeds.png",
    url: "https://jkagri.com/",
  },
  {
    name: "Siri Seeds",
    logo: "/clients/siri-seeds.png",
    url: "https://www.siriseeds.com/",
  },
  {
    name: "Nidhi Seeds",
    logo: "/clients/needi-seeds.png",
    url: "https://nidhiseed.com/",
  },
];

export default function ClientsGrid() {
  return (
    <section>
      <div className="section-title">
        <h2>Trusted by Industry Leaders</h2>
        <p>
          Long-term partnerships with globally recognized agricultural and seed brands.
        </p>
      </div>

      <div className="clients-grid">
        {clients.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="client-logo"
            aria-label={`Visit ${c.name} website`}
          >
            <img src={c.logo} alt={c.name} />
          </a>
        ))}
      </div>
    </section>
  );
}