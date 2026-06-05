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
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 ref={titleRef} style={styles.title}>
            Instant collaboration for remote teams
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
    width: '100%',
    backgroundImage: 'linear-gradient(70deg, #232340 0%, #161628 24%, rgba(0, 0, 0, 0) 80%), url("/assets/hero-CNE3053A.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    paddingLeft: '9%',
    paddingRight: '9%',
  },
  content: {
    maxWidth: '500px',
    textAlign: 'left',
  },
  title: {
    fontSize: '48px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-1px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    fontWeight: '400',
    color: 'rgba(245, 245, 245, 0.85)',
    marginBottom: '32px',
    fontFamily: 'var(--font-family)',
  },
  formContainer: {
    display: 'flex',
    gap: '12px',
    width: '100%',
    flexWrap: 'wrap',
  },
  inputWrapper: {
    position: 'relative',
    flex: '1 1 200px',
    maxWidth: '280px',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '2px solid #d1ecfd',
    borderRadius: '4px',
    padding: '16px 40px 16px 16px',
    fontSize: '15px',
    fontFamily: 'var(--font-family)',
    color: '#7676b2',
    outline: 'none',
  },
  arrowIcon: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#5468e7',
    fontSize: '18px',
    pointerEvents: 'none',
  },
  btn: {
    backgroundColor: '#5468e7',
    color: '#ffffff',
    fontFamily: 'var(--font-family)',
    fontSize: '15px',
    fontWeight: '600',
    padding: '16px 28px',
    borderRadius: '4px',
    border: 'none',
    transition: 'all 0.3s ease',
  },
};