import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    name: "Chelsea Morgan",
    role: "CEO of Subway",
    avatarBg: "#feebc8",
    avatarColor: "#dd6b20",
    avatarInitials: "CM"
  },
  {
    id: 2,
    stars: 5,
    text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis pretium sed non enim. Maecenas lacinia non orci.",
    name: "Nick Cave",
    role: "CMO at Nokia",
    avatarBg: "#e2e8f0",
    avatarColor: "#4a5568",
    avatarInitials: "NC"
  },
  {
    id: 3,
    stars: 5,
    text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Donec finibus, urna bibendum.",
    name: "Lana Rosenfeld",
    role: "Senior VP at Pinterest",
    avatarBg: "#ebf8ff",
    avatarColor: "#2b6cb0",
    avatarInitials: "LR"
  },
  {
    id: 4,
    stars: 5,
    text: "Porta pellentesque efficitur id eget nisl. Morbi ut tellus ac nulla ultrices ultrices. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Donec finibus, urna bibendum.",
    name: "Marcus Aurelius",
    role: "Product Owner at Google",
    avatarBg: "#e2fbf0",
    avatarColor: "#22c55e",
    avatarInitials: "MA"
  }
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>What people say about Team</h2>
        
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={styles.swiper}
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <div 
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.02)';
                }}
              >
                <div style={styles.stars}>
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i} style={styles.star}>★</span>
                  ))}
                </div>
                <p style={styles.text}>"{item.text}"</p>
                <div style={styles.profile}>
                  <div style={{
                    ...styles.avatar,
                    backgroundColor: item.avatarBg,
                    color: item.avatarColor
                  }}>
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 style={styles.name}>{item.name}</h4>
                    <p style={styles.role}>{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {}
        <div style={styles.navigation}>
          <button 
            onClick={() => swiperRef.current?.swiper.slidePrev()} 
            style={styles.navBtn}
            aria-label="Previous slide"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5468e71a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          >
            ←
          </button>
          <button 
            onClick={() => swiperRef.current?.swiper.slideNext()} 
            style={styles.navBtn}
            aria-label="Next slide"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5468e71a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: '#ffffff',
    textAlign: 'left',
  },
  container: {
    paddingLeft: '9%',
    paddingRight: '9%',
    position: 'relative',
  },
  title: {
    fontSize: '38px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: '#232340',
    marginBottom: '60px',
    letterSpacing: '-1px',
  },
  swiper: {
    paddingBottom: '40px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '36px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.02)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '320px',
    border: '1px solid #eef2f6',
    transition: 'all 0.3s ease',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '20px',
  },
  star: {
    color: '#ffb800',
    fontSize: '18px',
  },
  text: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#232340',
    opacity: 0.85,
    fontFamily: 'var(--font-family)',
    marginBottom: '30px',
    flexGrow: 1,
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: 'auto',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '15px',
  },
  name: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#232340',
    margin: 0,
  },
  role: {
    fontSize: '12px',
    color: '#6c6f8a',
    margin: 0,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
    marginTop: '20px',
  },
  navBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #eef2f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#5468e7',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};