import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send form data to a server
    alert('Form submitted!'); // For demonstration purposes
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Inline styles
  const contactPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  const headerStyle = {
    fontSize: '2rem',
    color: '#007BFF',
    marginBottom: '20px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    width: '100%'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px'
  };

  const textareaStyle = {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    minHeight: '100px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const backLinkStyle = {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '1rem'
  };

  return (
    <div style={contactPageStyle}>
      <h1 style={headerStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
      <Link to="/" style={backLinkStyle}>Back to Home</Link>
    </div>
  );
}

export default Contact;
