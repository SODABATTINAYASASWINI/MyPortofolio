import React, { useState } from "react";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please provide a valid email address!");
      return;
    }

    // EmailJS function
    emailjs
      .send(
        "service_f84y7bd", // EmailJS Service ID
        "template_ap4aj3r", // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "KylmEuM5PWyaSkP4A" // EmailJS Public Key
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left: Form */}
        <div className="contact-form">
          <h2>Get in <span style={{color: "white"}}>Touch</span></h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {error && <small className="error">{error}</small>}

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit">SEND MESSAGE</button>
            {success && <p className="success">{success}</p>}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <p><Mail size={24}/> yasaswinisodabattina@gmail.com</p>
          <p><Phone size={24}/> +91 8247040405</p>
          <p><MapPin size={24}/> Ramachandrapuram, Andhra Pradesh, India</p>

          <div className="social-icons">
            <a href="https://github.com/SODABATTINAYASASWINI" target="_blank" rel="noopener noreferrer"><Github size={32} /></a>
            <a href="https://www.linkedin.com/in/yasaswini-sodabattina-b51607258/" target="_blank" rel="noopener noreferrer"><Linkedin size={32} /></a>
            <a href="https://www.instagram.com/yasaswinisodabattina/" target="_blank" rel="noopener noreferrer"><Instagram size={32} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
