import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(descRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.0 }, 
      '-=0.8'
    )
    .fromTo(formRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} style={styles.heroSection}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 ref={titleRef} style={styles.title}>
            Instant collaboration<br />for remote teams
          </h1>
          <p ref={descRef} style={styles.description}>
            All-in-one place for your remote team to chat, collaborate and track project progress.
          </p>
          <div ref={formRef} style={styles.formContainer}>
            <div style={styles.inputWrapper}>
              <input 
                type="email" 
                placeholder="Email" 
                style={styles.input} 
              />
              <span style={styles.arrowIcon}>→</span>
            </div>
            <button style={styles.btn}>Get Early Access</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    minHeight: '700px',
    backgroundImage: 'url("/assets/hero_bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px', // spacing for header
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 16, 32, 0.75)',
    zIndex: 1,
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 2,
  },
  content: {
    maxWidth: '650px',
    textAlign: 'left',
  },
  title: {
    fontSize: '56px',
    lineHeight: '1.15',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-1.5px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '40px',
    fontFamily: 'var(--font-body)',
  },
  formContainer: {
    display: 'flex',
    gap: '16px',
  },
  inputWrapper: {
    position: 'relative',
    flex: 1,
    maxWidth: '320px',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '16px 20px',
    fontSize: '15px',
    fontFamily: 'var(--font-body)',
    color: '#1e2030',
    outline: 'none',
  },
  arrowIcon: {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#4b6bfb',
    fontSize: '18px',
    pointerEvents: 'none',
  },
  btn: {
    backgroundColor: '#4b6bfb',
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    fontSize: '15px',
    fontWeight: '600',
    padding: '16px 32px',
    borderRadius: '6px',
    border: 'none',
    boxShadow: '0 4px 14px rgba(75, 107, 251, 0.3)',
    transition: 'all 0.3s ease',
  },
};
