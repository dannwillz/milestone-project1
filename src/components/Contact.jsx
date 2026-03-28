import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      body: formData,
    });

    setMessage("Message sent successfully!");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Have any questions about the Solar System?</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" required />

          <button type="submit" className="btn">Send Message</button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default Contact;