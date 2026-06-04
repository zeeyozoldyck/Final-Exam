import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection({ title, description, imageSrc, imageLeft, overlay }) {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    // Left column enters from left
    gsap.fromTo(
      leftColRef.current,
      { x: -120, opacity: 0 },
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

    // Right column enters from right
    gsap.fromTo(
      rightColRef.current,
      { x: 120, opacity: 0 },
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
        {/* Left Column (Relative to flex direction) */}
        <div ref={leftColRef} style={styles.column}>
          <div style={styles.visualWrapper}>
            <img src={imageSrc} alt={title} style={styles.mainImage} />
            {overlay && <div style={styles.overlayContainer}>{overlay}</div>}
          </div>
        </div>

        {/* Right Column (Relative to flex direction) */}
        <div ref={rightColRef} style={styles.textColumn}>
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
    padding: '80px 0',
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
  },
  column: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColumn: {
    flex: 1,
    textAlign: 'left',
  },
  visualWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '480px',
    borderRadius: '16px',
    overflow: 'visible',
    boxShadow: 'var(--shadow-md)',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    display: 'block',
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  title: {
    fontSize: '38px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: 'var(--color-dark)',
    marginBottom: '20px',
    letterSpacing: '-0.8px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'var(--color-text-gray)',
    marginBottom: '30px',
    fontFamily: 'var(--font-body)',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#4b6bfb',
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'var(--font-heading)',
  },
  arrow: {
    transition: 'transform 0.3s ease',
  },
};
