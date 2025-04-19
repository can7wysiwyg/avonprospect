'use client'

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f9fa',
    color: '#212529',
    padding: '60px 0',
    marginTop: '30px',
    borderTop: '1px solid #e9ecef',
  };

  const headingStyle = {
    color: '#212529',
    fontWeight: 600,
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#6c757d',
  };

  const footerLinksStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const footerLinkItemStyle = {
    marginBottom: '10px',
  };

  const footerLinkStyle = {
    color: '#6c757d',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const socialLinkStyle = {
    display: 'inline-block',
    width: '36px',
    height: '36px',
    backgroundColor: '#e9ecef',
    marginRight: '10px',
    textAlign: 'center',
    lineHeight: '36px',
    borderRadius: '50%',
    color: '#495057',
    transition: 'all 0.3s',
  };

  const footerBottomStyle = {
    backgroundColor: '#e9ecef',
    padding: '15px 0',
    color: '#6c757d',
    fontSize: '14px',
  };

  return (
    <>
    
      <footer style={footerStyle}>
        <div className="container">
          <div className="row">
          
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 style={headingStyle}>About Us</h5>
              <p style={paragraphStyle}>
                Avon Shop is a is a is a
              </p>
              <div className="social-links mt-3">
                <Link href="/" style={socialLinkStyle}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="/" style={socialLinkStyle}>
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="/" style={socialLinkStyle}>
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="/" style={socialLinkStyle}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

          
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 style={headingStyle}>Quick Links</h5>
              <ul style={footerLinksStyle}>
                <li style={footerLinkItemStyle}>
                  <Link href="/" style={footerLinkStyle}>Home</Link>
                </li>
                <li style={footerLinkItemStyle}>
                  <Link href="/" style={footerLinkStyle}>About</Link>
                </li>
                
                <li style={footerLinkItemStyle}>
                  <Link href="/products" style={footerLinkStyle}>Our Shop</Link>
                </li>
                <li style={footerLinkItemStyle}>
                  <Link href="/" style={footerLinkStyle}>Contact</Link>
                </li>
              </ul>
            </div>

          
            <div className="col-md-4">
              <h5 style={headingStyle}>Contact Info</h5>
              <ul style={footerLinksStyle}>
                <li style={footerLinkItemStyle}>Blantyre, Malawi</li>
                <li style={footerLinkItemStyle}>Phone: +265 888 8900</li>
                <li style={footerLinkItemStyle}>Email: info@avonshop.com</li>
                <li style={footerLinkItemStyle}>Hours: Mon-Fri 9am - 5pm</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

  
      <div style={footerBottomStyle} className="text-center">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} Avon Shop. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;