export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Country" />
      <input type="text" placeholder="Pin Code" />
      <input type="tel" placeholder="Phone Number" />
      <textarea rows="4" placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}