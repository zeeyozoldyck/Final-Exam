import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CollageSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { scale: 0.3, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        <div style={styles.leftCol}>
          <h2 style={styles.title}>Chats for your distributed teams</h2>
          <p style={styles.desc}>
            Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
          </p>
          <a href="#learn-more" style={styles.link}>
            Learn more <span style={styles.arrow}>→</span>
          </a>
        </div>
        
        <div style={styles.rightCol}>
          <div style={styles.collageContainer}>
            {/* 1. Sidebar Card */}
            <div 
              ref={addToRefs} 
              style={{ ...styles.card, ...styles.sidebarCard }}
            >
              <div style={styles.logo}>team<span style={{ color: '#4b6bfb' }}>.</span></div>
              <div style={styles.sidebarItemActive}>
                <span style={styles.icon}>📊</span> Overview
              </div>
              <div style={styles.sidebarItem}><span style={styles.icon}>📋</span> Task</div>
              <div style={styles.sidebarItem}><span style={styles.icon}>👥</span> Mentors</div>
              <div style={styles.sidebarItem}><span style={styles.icon}>💬</span> Message</div>
              <div style={styles.sidebarItem}><span style={styles.icon}>⚙️</span> Settings</div>
            </div>

            {/* 2. Main Dashboard Card */}
            <div 
              ref={addToRefs} 
              style={{ ...styles.card, ...styles.mainCard }}
            >
              <div style={styles.dashboardHeader}>
                <div>
                  <h4 style={styles.dashGreeting}>Hi, Skylar Dias</h4>
                  <p style={styles.dashSubtitle}>Let's finish your task today!</p>
                </div>
                <div style={styles.avatarCircle}>SD</div>
              </div>
              
              <div style={styles.dashboardGrid}>
                {/* Running Task */}
                <div style={styles.dashBox}>
                  <p style={styles.boxTitle}>Running Task</p>
                  <p style={styles.boxMain}>65</p>
                  <div style={styles.progressRow}>
                    <span style={styles.progressPercent}>45%</span>
                    <span style={styles.progressDesc}>100 Task</span>
                  </div>
                </div>

                {/* Activity Wave */}
                <div style={styles.dashBox}>
                  <p style={styles.boxTitle}>Activity</p>
                  <div style={styles.waveContainer}>
                    <svg viewBox="0 0 100 40" style={styles.waveSvg}>
                      <path 
                        d="M0 30 Q15 10 30 25 T60 15 T90 20 L100 20 L100 40 L0 40 Z" 
                        fill="rgba(75, 107, 251, 0.1)" 
                        stroke="#4b6bfb" 
                        strokeWidth="2"
                      />
                      <circle cx="30" cy="25" r="3" fill="#4b6bfb" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Monthly Mentors */}
              <div style={styles.mentorsSection}>
                <p style={styles.sectionTitle}>Monthly Mentors</p>
                <div style={styles.mentorsList}>
                  <div style={styles.mentorItem}>
                    <div style={styles.mentorAvatar}>CG</div>
                    <div>
                      <p style={styles.mentorName}>Curious George</p>
                      <p style={styles.mentorRole}>UI/UX Design</p>
                    </div>
                    <span style={styles.followBtn}>+ Follow</span>
                  </div>
                  <div style={styles.mentorItem}>
                    <div style={styles.mentorAvatarBlue}>AL</div>
                    <div>
                      <p style={styles.mentorName}>Abraham Lincoln</p>
                      <p style={styles.mentorRole}>3D Design</p>
                    </div>
                    <span style={styles.followedText}>Followed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Floating User Card */}
            <div 
              ref={addToRefs} 
              style={{ ...styles.card, ...styles.userCard }}
            >
              <div style={styles.userHeader}>
                <div style={styles.userAvatarJ}>JP</div>
                <div>
                  <h4 style={styles.userName}>Julia Philips</h4>
                  <p style={styles.userRole}>iOS Developer</p>
                </div>
                <span style={styles.userFollow}>+ Follow</span>
              </div>
              <p style={styles.userBio}>
                Hi, I'm Julia Philips. I'm a senior manager at Apple company...
              </p>
              <div style={styles.userStats}>
                <span>⏱️ 60 Task</span>
                <span style={{ color: '#ff9900' }}>⭐ 4.9 (910 Reviews)</span>
              </div>
            </div>

            {/* 4. Chat Icon Bubble */}
            <div 
              ref={addToRefs} 
              style={{ ...styles.card, ...styles.chatBubble }}
            >
              <span style={styles.chatIcon}>⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#f8f9fa',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  leftCol: {
    textAlign: 'left',
  },
  title: {
    fontSize: '42px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: 'var(--color-dark)',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  desc: {
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
  rightCol: {
    position: 'relative',
    height: '480px',
  },
  collageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  card: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-lg)',
    padding: '16px',
    zIndex: 1,
  },
  sidebarCard: {
    width: '180px',
    left: '0px',
    top: '40px',
    zIndex: 2,
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '20px',
    fontWeight: '800',
    marginBottom: '24px',
  },
  sidebarItemActive: {
    backgroundColor: 'rgba(75, 107, 251, 0.1)',
    color: '#4b6bfb',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  sidebarItem: {
    color: 'var(--color-text-gray)',
    padding: '8px 12px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
    cursor: 'pointer',
  },
  mainCard: {
    width: '320px',
    right: '20px',
    top: '0px',
    zIndex: 1,
  },
  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  dashGreeting: {
    fontSize: '16px',
    fontWeight: '700',
    margin: 0,
  },
  dashSubtitle: {
    fontSize: '11px',
    color: 'var(--color-text-gray)',
    margin: 0,
  },
  avatarCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600',
    color: '#4a5568',
  },
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '12px',
    marginBottom: '16px',
  },
  dashBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '12px',
  },
  boxTitle: {
    fontSize: '10px',
    color: 'var(--color-text-gray)',
    margin: 0,
  },
  boxMain: {
    fontSize: '24px',
    fontWeight: '800',
    color: 'var(--color-dark)',
    margin: '4px 0',
  },
  progressRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '10px',
  },
  progressPercent: {
    color: '#4b6bfb',
    fontWeight: '600',
  },
  progressDesc: {
    color: 'var(--color-text-gray)',
  },
  waveContainer: {
    marginTop: '8px',
    height: '40px',
  },
  waveSvg: {
    width: '100%',
    height: '100%',
  },
  mentorsSection: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '12px',
  },
  sectionTitle: {
    fontSize: '11px',
    fontWeight: '700',
    color: 'var(--color-dark)',
    margin: '0 0 10px 0',
  },
  mentorsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  mentorItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
  },
  mentorAvatar: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#fed7d7',
    color: '#c53030',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
  },
  mentorAvatarBlue: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#ebf8ff',
    color: '#2b6cb0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
  },
  mentorName: {
    fontWeight: '600',
    margin: 0,
  },
  mentorRole: {
    color: 'var(--color-text-gray)',
    fontSize: '9px',
    margin: 0,
  },
  followBtn: {
    marginLeft: 'auto',
    color: '#4b6bfb',
    fontWeight: '600',
    cursor: 'pointer',
  },
  followedText: {
    marginLeft: 'auto',
    color: 'var(--color-text-gray)',
  },
  userCard: {
    width: '280px',
    left: '60px',
    bottom: '20px',
    zIndex: 3,
  },
  userHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  userAvatarJ: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#feebc8',
    color: '#dd6b20',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '12px',
  },
  userName: {
    fontSize: '13px',
    fontWeight: '700',
    margin: 0,
  },
  userRole: {
    fontSize: '10px',
    color: 'var(--color-text-gray)',
    margin: 0,
  },
  userFollow: {
    marginLeft: 'auto',
    color: '#4b6bfb',
    fontWeight: '600',
    fontSize: '12px',
    cursor: 'pointer',
  },
  userBio: {
    fontSize: '11px',
    lineHeight: '1.4',
    color: 'var(--color-text-gray)',
    margin: '0 0 12px 0',
  },
  userStats: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '10px',
    fontWeight: '600',
  },
  chatBubble: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#4b6bfb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '300px',
    bottom: '160px',
    zIndex: 4,
    color: '#ffffff',
    boxShadow: '0 8px 24px rgba(75, 107, 251, 0.4)',
  },
  chatIcon: {
    fontSize: '20px',
  },
};
