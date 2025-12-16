export default function Testimonials() {
  const testimonials = [
    { quote: "Consistent quality and dependable delivery.", author: "Syngenta" },
    { quote: "Affordable, reliable, and responsive.", author: "Advanta" },
    { quote: "Outstanding service and execution.", author: "JK Seeds" },
    { quote: "One of the most dependable print partners.", author: "Siri Seeds" },
  ];

  return (
    <section className="testimonials">
      {testimonials.map((t, index) => (
        <div key={index} className="testimonial-card">
          <p>“{t.quote}”</p>
          <span>— {t.author}</span>
        </div>
      ))}
    </section>
  );
}