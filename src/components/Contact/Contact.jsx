import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-header">Contact</h2>
      <form className="form grid" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Name <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Message
            <textarea name="message" cols="30" rows="10" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </p>
      </form>
    </section>
  );
}
