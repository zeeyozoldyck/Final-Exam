import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    ...styles.header,
    ...(isScrolled ? styles.scrolledHeader : styles.defaultHeader)
  };

  return (
    <header style={headerStyle}>
      <div style={styles.container}>
        <div style={styles.logo}>
          team<span style={{ color: '#5468e7' }}>.</span>
        </div>
        <nav style={styles.nav}>
          <a href="#product" style={styles.navLink}>Product</a>
          <a href="#blog" style={styles.navLink}>Blog</a>
          <a href="#support" style={styles.navLink}>Support</a>
        </nav>
        <button style={styles.btn}>Get Access</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultHeader: {
    top: '3.7vh',
    left: '8.6vw',
    width: '82.8vw',
    backgroundColor: 'transparent',
    padding: '10px 0',
  },
  scrolledHeader: {
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80vw',
    backgroundColor: '#0f0c16a6',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    borderRadius: '24px',
    padding: '16px 26px',
    boxShadow: '0 24px 70px rgba(0,0,0,0.25)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-family)',
    fontSize: '28px',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  nav: {
    display: 'flex',
    gap: '5vw',
  },
  navLink: {
    fontFamily: 'var(--font-family)',
    fontSize: '15px',
    fontWeight: '500',
    color: '#f5f5f5',
    transition: 'color 0.3s ease',
  },
  btn: {
    backgroundColor: 'rgba(84, 104, 231, 0.5)',
    color: '#ffffff',
    fontFamily: 'var(--font-family)',
    fontSize: '15px',
    fontWeight: '600',
    padding: '12px 28px',
    borderRadius: '4px',
    border: 'none',
    transition: 'all 0.3s ease',
  }
};