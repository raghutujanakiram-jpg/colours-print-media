const testimonials = [
  { quote: "Consistent quality and dependable delivery.", company: "Syngenta" },
  { quote: "Affordable, reliable, and responsive.", company: "Advanta" },
  { quote: "Outstanding service and execution.", company: "JK Seeds" },
  { quote: "One of the most dependable print partners.", company: "Siri Seeds" },
];

export default function Testimonials() {
  return (
    <section>
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p>“{t.quote}”</p>
          <strong>— {t.company}</strong>
        </div>
      ))}
    </section>
  );
}