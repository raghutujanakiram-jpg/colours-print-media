export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Company" />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone" />
      <textarea placeholder="Your requirement" rows="4"></textarea>
      <button type="submit">Submit Request</button>
    </form>
  );
}