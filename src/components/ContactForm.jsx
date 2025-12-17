export default function ContactForm() {
  return (
    <form className="contact-form">
      <input placeholder="Name" required />
      <input placeholder="Company" />
      <input placeholder="Email" required />
      <input placeholder="Phone" />
      <textarea placeholder="Your requirement" rows="4"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}