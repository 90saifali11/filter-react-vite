import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  // Inline styles
  const aboutPageStyle = {
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

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#333',
    maxWidth: '800px',
    textAlign: 'center',
    lineHeight: '1.6'
  };

  const backLinkStyle = {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '1rem'
  };

  return (
    <div style={aboutPageStyle}>
      <h1 style={headerStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to Product E-store! We are dedicated to bringing you the best products at the best prices. Our mission is to provide a seamless shopping experience with a wide range of products to choose from. We believe in quality, customer satisfaction, and making your shopping experience enjoyable and hassle-free.
      </p>
      <Link to="/" style={backLinkStyle}>Back to Home</Link>
    </div>
  );
}

export default About;
