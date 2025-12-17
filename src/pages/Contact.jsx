import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section>
      <SectionTitle
        title="Contact Us"
        subtitle="For any queries and information, reach out to us anytime"
      />

      <div className="contact-layout">
        {/* LEFT: CONTACT FORM */}
        <div className="contact-form-wrapper card">
          <ContactForm />
        </div>

        {/* RIGHT: ADDRESS DETAILS */}
        <div className="contact-info card">
          <h3>Address</h3>

          <p>
            Colours Print Media<br />
            Colours Home<br />
            #11-4-621/b, Opp. Probel School<br />
            Income Tax Towers Road<br />
            AC Guards<br />
            Hyderabad – 500004
          </p>

          <p>
            <strong>Phone:</strong><br />
            040-66886333 / 7333
          </p>

          <p>
            <strong>Email:</strong><br />
            coloursprintmedia@yahoo.com
          </p>

          <p>
            <strong>Website:</strong><br />
            www.coloursprintmedia.com
          </p>
        </div>
      </div>
    </section>
  );
}