export default function ClientsGrid() {
  const clients = [
    "Syngenta",
    "Advanta",
    "JK Seeds",
    "Siri Seeds",
    "Shakti Seeds",
    "Needi Seeds",
    "GARC",
  ];

  return (
    <section className="grid">
      {clients.map((client, index) => (
        <div key={index} className="card muted">
          {client}
        </div>
      ))}
    </section>
  );
}