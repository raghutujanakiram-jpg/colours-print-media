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
        <div className="testimonial-card">
  <p>“Consistent quality and dependable delivery.”</p>
  <strong>— Syngenta</strong>
</div>
      ))}
    </section>
  );
}