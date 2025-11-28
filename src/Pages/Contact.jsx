import React, { useRef, useEffect, useState } from "react";
import "../Styles/contact.css";
import Button from "../Components/Button";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SERVICE_ID = "service_u5citee";
const TEMPLATE_ID = "template_bqqb1y8";
const PUBLIC_KEY = "WPjBuSBvWOI-9qd7J";

const Contact = () => {
  const form = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      },
      () => {
        alert("❌ Failed to send message. Please try again later!");
      }
    );
  };

  return (
    <section
      className={`contact-section ${visible ? "fade-in" : ""}`}
      id="contact"
    >
      <div className="social-sidebar">
        <a
          href="mailto:dibyaranjanmahanta.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/DibyaranjanMahanta"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dibya-ranjan-mahanta-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="contact-container">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Feel free to drop me a
          message below 👇
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />

          <Button
            text="🚀 Send Message"
            type="submit"
            className="contact-btn"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
