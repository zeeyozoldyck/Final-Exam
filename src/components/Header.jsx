import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          team<span style={{ color: '#4b6bfb' }}>.</span>
        </div>
        <nav style={styles.nav}>
          <a href="#product" style={styles.navLink}>Product</a>
          <a href="#blog" style={styles.navLink}>Blog</a>
          <a href="#support" style={styles.navLink}>Support</a>
          <a href="#login" style={styles.navLink}>Log In</a>
        </nav>
        <button style={styles.btn}>Get Access</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '24px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '28px',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  nav: {
    display: 'flex',
    gap: '32px',
  },
  navLink: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.85)',
    transition: 'color 0.3s ease',
  },
  btn: {
    backgroundColor: '#4b6bfb',
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    fontSize: '15px',
    fontWeight: '600',
    padding: '10px 24px',
    borderRadius: '6px',
    border: 'none',
    boxShadow: '0 4px 14px rgba(75, 107, 251, 0.3)',
    transition: 'all 0.3s ease',
  }
};
