import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection({ title, description, baseImage, imageLeft, overlays }) {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo(
      leftColRef.current,
      { x: imageLeft ? 80 : -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      rightColRef.current,
      { x: imageLeft ? -80 : 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} style={styles.section}>
      <div style={{
        ...styles.container,
        flexDirection: imageLeft ? 'row' : 'row-reverse'
      }}>
        {}
        <div ref={rightColRef} style={styles.column}>
          <div style={styles.visualWrapper}>
            <img src={baseImage} alt={title} style={styles.mainImage} />
            {overlays && overlays.map((overlay, index) => (
              <img 
                key={index} 
                src={overlay.src} 
                alt={`overlay-${index}`} 
                style={{
                  ...styles.overlayImage,
                  ...overlay.style
                }}
              />
            ))}
          </div>
        </div>

        {}
        <div ref={leftColRef} style={styles.textColumn}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
          <a href="#learn" style={styles.link}>
            Learn more <span style={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    gap: '80px',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1 1 450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColumn: {
    flex: '1 1 400px',
    textAlign: 'left',
    maxWidth: '480px',
  },
  visualWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '460px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 15px 45px rgba(0, 0, 0, 0.08)',
    display: 'block',
  },
  overlayImage: {
    position: 'absolute',
    borderRadius: '8px',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '38px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: '#232340',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.65',
    color: '#7676b2',
    marginBottom: '28px',
    fontFamily: 'var(--font-family)',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#5468e7',
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'var(--font-family)',
  },
  arrow: {
    transition: 'transform 0.3s ease',
  },
};