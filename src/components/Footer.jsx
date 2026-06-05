import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logoCol}>
          <div style={styles.logo}>team<span style={{ color: '#5468e7' }}>.</span></div>
          <p style={styles.tagline}>Collaboration platform for modern team</p>
        </div>

        <div style={styles.linksCol}>
          <h4 style={styles.colTitle}>Company</h4>
          <ul style={styles.list}>
            <li><a href="#product" style={styles.link}>Product</a></li>
            <li><a href="#blog" style={styles.link}>Blog</a></li>
            <li><a href="#support" style={styles.link}>Support</a></li>
          </ul>
        </div>

        <div style={styles.linksCol}>
          <h4 style={styles.colTitle}>Features</h4>
          <ul style={styles.list}>
            <li><a href="#screen-sharing" style={styles.link}>Screen Sharing</a></li>
            <li><a href="#apps" style={styles.link}>iOS & Android Apps</a></li>
            <li><a href="#file-sharing" style={styles.link}>File Sharing</a></li>
            <li><a href="#management" style={styles.link}>User Management</a></li>
          </ul>
        </div>

        <div style={styles.linksCol}>
          <h4 style={styles.colTitle}>Contact Us</h4>
          <ul style={styles.list}>
            <li style={styles.textItem}>info@teamapp.com</li>
            <li style={styles.textItem}>1-800-200-300</li>
            <li style={styles.textItem}>1010 Sunset Blv. Palo Alto, California</li>
          </ul>
        </div>

        <div style={styles.subscribeCol}>
          <h4 style={styles.colTitle}>Stay up to date</h4>
          <p style={styles.subtext}>Subscribe to our newsletter</p>
          <div style={styles.inputWrapper}>
            <input 
              type="email" 
              placeholder="Email" 
              style={styles.input} 
            />
            <span style={styles.arrowIcon}>→</span>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={styles.copyright}>
          © Copyright Team Inc.
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#232340',
    color: '#ffffff',
    padding: '80px 0 40px 0',
    fontFamily: 'var(--font-family)',
  },
  container: {
    paddingLeft: '9%',
    paddingRight: '9%',
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr 1.5fr',
    gap: '40px',
    alignItems: 'start',
  },
  logoCol: {
    textAlign: 'left',
  },
  logo: {
    fontFamily: 'var(--font-family)',
    fontSize: '28px',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.5px',
    marginBottom: '16px',
  },
  tagline: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#f5f5f5',
    opacity: 0.8,
    margin: 0,
    maxWidth: '200px',
  },
  linksCol: {
    textAlign: 'left',
  },
  colTitle: {
    fontFamily: 'var(--font-family)',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '20px',
    marginRight: 0,
    marginTop: 0,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  link: {
    fontSize: '14px',
    color: '#f5f5f5',
    opacity: 0.7,
    transition: 'opacity 0.3s ease',
  },
  textItem: {
    fontSize: '14px',
    color: '#f5f5f5',
    opacity: 0.7,
    lineHeight: '1.5',
  },
  subscribeCol: {
    textAlign: 'left',
  },
  subtext: {
    fontSize: '14px',
    color: '#f5f5f5',
    opacity: 0.7,
    marginBottom: '16px',
    marginRight: 0,
    marginTop: 0,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(245, 245, 245, 0.24)',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 40px 12px 16px',
    fontSize: '14px',
    color: '#ffffff',
    outline: 'none',
    fontFamily: 'var(--font-family)',
  },
  arrowIcon: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#ffffff',
    fontSize: '16px',
    pointerEvents: 'none',
  },
  bottomBar: {
    margin: '60px auto 0 auto',
    paddingLeft: '9%',
    paddingRight: '9%',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '30px',
    textAlign: 'left',
  },
  copyright: {
    fontSize: '14px',
    color: '#f5f5f5',
    opacity: 0.5,
  },
};