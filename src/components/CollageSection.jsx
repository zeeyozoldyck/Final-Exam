import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CollageSection() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo(
      leftColRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      rightColRef.current.children,
      { scale: 0.8, y: 40, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        <div ref={leftColRef} style={styles.leftCol}>
          <h2 style={styles.title}>Chats for distributed teams</h2>
          <p style={styles.desc}>
            Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
          </p>
          <a href="#learn-more" style={styles.link}>
            Learn more <span style={styles.arrow}>→</span>
          </a>
        </div>
        
        <div ref={rightColRef} style={styles.rightCol}>
          <div style={styles.mockupWrapper}>
            {}
            <img 
              src="/assets/Web - Dashboard-QOamKC3X.png" 
              alt="Dashboard" 
              style={styles.baseImg}
            />

            {}
            <img 
              src="/assets/Task Today-BNhHC8wk.png" 
              alt="Task Card" 
              style={styles.taskCardImg}
            />

            {}
            <div style={styles.mentorsContainer}>
              <img 
                src="/assets/Mentors 3-CgiBRE2s.png" 
                alt="Mentors Card" 
                style={styles.mentorsCardImg}
              />
              <img 
                src="/assets/send-BDdmlEih.png" 
                alt="Send Bubble" 
                style={styles.sendBubbleImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
  },
  leftCol: {
    flex: '1 1 400px',
    maxWidth: '480px',
    textAlign: 'left',
  },
  title: {
    fontSize: '38px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: '#232340',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  desc: {
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
  rightCol: {
    flex: '1 1 500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '460px',
  },
  mockupWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    maxWidth: '520px',
  },
  baseImg: {
    position: 'absolute',
    width: '75%',
    top: '10%',
    right: '0%',
    borderRadius: '12px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  taskCardImg: {
    position: 'absolute',
    width: '32%',
    top: '0%',
    left: '2%',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    zIndex: 2,
  },
  mentorsContainer: {
    position: 'absolute',
    width: '42%',
    bottom: '2%',
    left: '0%',
    zIndex: 3,
  },
  mentorsCardImg: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
  },
  sendBubbleImg: {
    position: 'absolute',
    width: '50%',
    top: '-35%',
    right: '-25%',
    zIndex: 4,
  }
};