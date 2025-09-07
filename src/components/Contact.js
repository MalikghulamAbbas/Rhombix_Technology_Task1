// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>I'm always interested in new opportunities and interesting projects. Feel free to reach out if you'd like to work together!</p>
            <div className="contact-details">
              <p><strong>Email:</strong> mghulamabbas552@gmail.com</p>
              <p><strong>Phone:</strong> +92-315-1754154 </p>
              <div className="social-links">
                <a href="https://linkedin.com/in/malikghulamabbas14714" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/MalikghulamAbbas" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://wa.me/+923151754154" target="_blank" rel="noopener noreferrer">Whatsapp</a>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;