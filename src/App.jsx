import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CollageSection from './components/CollageSection';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  // Section 3 Overlay: Calendar Card
  const calendarOverlay = (
    <div style={styles.calendarCard}>
      <div style={styles.calendarHeader}>
        <span style={styles.calendarNav}>&lt;</span>
        <span style={styles.calendarTitle}>July 2022</span>
        <span style={styles.calendarNav}>&gt;</span>
      </div>
      <div style={styles.calendarDays}>
        <div style={styles.dayCol}><span>S</span><span>10</span></div>
        <div style={styles.dayCol}><span>M</span><span>11</span></div>
        <div style={styles.dayCol}><span>T</span><span>12</span></div>
        <div style={{ ...styles.dayCol, ...styles.activeDay }}><span>W</span><span>13</span></div>
        <div style={styles.dayCol}><span>T</span><span>14</span></div>
        <div style={styles.dayCol}><span>F</span><span>15</span></div>
        <div style={styles.dayCol}><span>S</span><span>16</span></div>
      </div>
    </div>
  );

  // Section 4 Overlay: Brian Robinson and Creating Perfect Website cards
  const section4Overlay = (
    <div style={styles.overlayContainer}>
      <div style={{ ...styles.overlayCard, top: '40px', right: '-30px' }}>
        <div style={styles.avatarRow}>
          <div style={{ ...styles.overlayAvatar, backgroundColor: '#fed7d7', color: '#c53030' }}>BR</div>
          <div>
            <h4 style={styles.overlayCardTitle}>Brian Robinson</h4>
            <p style={styles.overlayCardSub}>Android Developer</p>
          </div>
          <span style={styles.followedTag}>Followed</span>
        </div>
        <div style={styles.cardStats}>
          <span>📋 28 Task</span>
          <span style={{ color: '#ff9900' }}>★ 4.8 (370 Reviews)</span>
        </div>
      </div>
      <div style={{ ...styles.overlayCard, bottom: '40px', right: '-10px', width: '260px' }}>
        <h4 style={styles.overlayCardTitle}>Creating Perfect Website</h4>
        <p style={styles.overlayCardSub}>Web Developer</p>
        <div style={styles.progressContainer}>
          <div style={styles.progressBarWrapper}>
            <div style={{ ...styles.progressBar, width: '85%' }}></div>
          </div>
          <span style={styles.progressPercentText}>85%</span>
        </div>
        <div style={styles.cardFooter}>
          <span>⏱️ 4 Days Left</span>
          <div style={styles.miniAvatars}>
            <span style={styles.miniAvatar}>👤</span>
            <span style={styles.miniAvatar}>👤</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Section 5 Overlay: Creating Mobile App Design and Curious George cards
  const section5Overlay = (
    <div style={styles.overlayContainer}>
      <div style={{ ...styles.overlayCard, top: '50px', left: '-30px', width: '250px' }}>
        <h4 style={styles.overlayCardTitle}>Creating Mobile App Design</h4>
        <p style={styles.overlayCardSub}>UI/UX Design</p>
        <div style={styles.progressContainer}>
          <div style={styles.progressBarWrapper}>
            <div style={{ ...styles.progressBar, width: '75%' }}></div>
          </div>
          <span style={styles.progressPercentText}>75%</span>
        </div>
        <div style={styles.cardFooter}>
          <span>⏱️ 3 Days Left</span>
          <div style={styles.miniAvatars}>
            <span style={styles.miniAvatar}>👤</span>
          </div>
        </div>
      </div>
      <div style={{ ...styles.overlayCard, bottom: '60px', left: '-10px' }}>
        <div style={styles.avatarRow}>
          <div style={{ ...styles.overlayAvatar, backgroundColor: '#ebf8ff', color: '#2b6cb0' }}>CG</div>
          <div>
            <h4 style={styles.overlayCardTitle}>Curious George</h4>
            <p style={styles.overlayCardSub}>UI/UX Design</p>
          </div>
          <span style={styles.followTag}>+ Follow</span>
        </div>
        <div style={styles.cardStats}>
          <span>📋 40 Task</span>
          <span style={{ color: '#ff9900' }}>★ 4.7 (750 Reviews)</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <main>
        {/* Section 1 */}
        <Hero />

        {/* Section 2 */}
        <CollageSection />

        {/* Section 3 */}
        <FeatureSection 
          title="Chats for your distributed teams"
          description="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
          imageSrc="/assets/woman_yellow_mug.png"
          imageLeft={true}
          overlay={calendarOverlay}
        />

        {/* Section 4 */}
        <FeatureSection 
          title="Choose how you want to work"
          description="In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
          imageSrc="/assets/woman_couch.png"
          imageLeft={false}
          overlay={section4Overlay}
        />

        {/* Section 5 */}
        <FeatureSection 
          title="Move faster with your Team tools"
          description="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
          imageSrc="/assets/laptop_typing.png"
          imageLeft={true}
          overlay={section5Overlay}
        />

        {/* Section 6 */}
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

const styles = {
  calendarCard: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: 'var(--shadow-lg)',
    padding: '12px 16px',
    width: '260px',
    pointerEvents: 'none',
  },
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    fontWeight: '700',
    color: '#1e2030',
    marginBottom: '10px',
  },
  calendarNav: {
    color: '#4b6bfb',
    cursor: 'pointer',
  },
  calendarTitle: {
    fontFamily: 'var(--font-heading)',
  },
  calendarDays: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  dayCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    fontSize: '9px',
    color: '#5e6278',
  },
  activeDay: {
    backgroundColor: '#4b6bfb',
    color: '#ffffff',
    padding: '4px 6px',
    borderRadius: '8px',
    marginTop: '-4px',
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  overlayCard: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: 'var(--shadow-lg)',
    padding: '12px 16px',
    width: '240px',
    zIndex: 10,
    pointerEvents: 'none',
  },
  avatarRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  overlayAvatar: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '11px',
  },
  overlayCardTitle: {
    fontSize: '12px',
    fontWeight: '700',
    margin: 0,
    color: '#1e2030',
  },
  overlayCardSub: {
    fontSize: '9px',
    color: '#5e6278',
    margin: 0,
  },
  followedTag: {
    marginLeft: 'auto',
    fontSize: '10px',
    color: '#5e6278',
  },
  followTag: {
    marginLeft: 'auto',
    fontSize: '10px',
    color: '#4b6bfb',
    fontWeight: '600',
  },
  cardStats: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '9px',
    fontWeight: '600',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '8px',
    marginTop: '4px',
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '8px 0',
  },
  progressBarWrapper: {
    flex: 1,
    height: '6px',
    backgroundColor: '#e2e8f0',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4b6bfb',
    borderRadius: '3px',
  },
  progressPercentText: {
    fontSize: '10px',
    fontWeight: '700',
    color: '#4b6bfb',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '9px',
    color: '#5e6278',
  },
  miniAvatars: {
    display: 'flex',
    gap: '-4px',
  },
  miniAvatar: {
    fontSize: '10px',
  },
};
