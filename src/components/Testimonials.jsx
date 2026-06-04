import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    name: "Chealsea Morgan",
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
              <div style={styles.card}>
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

        {/* Custom Navigation */}
        <div style={styles.navigation}>
          <button 
            onClick={() => swiperRef.current?.swiper.slidePrev()} 
            style={styles.navBtn}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            onClick={() => swiperRef.current?.swiper.slideNext()} 
            style={styles.navBtn}
            aria-label="Next slide"
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
    padding: '100px 0',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
  },
  title: {
    fontSize: '42px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: 'var(--color-dark)',
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
    boxShadow: 'var(--shadow-md)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '320px',
    border: '1px solid rgba(0,0,0,0.02)',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '20px',
  },
  star: {
    color: '#ff9900',
    fontSize: '18px',
  },
  text: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--color-text-gray)',
    fontFamily: 'var(--font-body)',
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
    width: '44px',
    height: '44px',
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
    margin: 0,
  },
  role: {
    fontSize: '12px',
    color: 'var(--color-text-gray)',
    margin: 0,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '30px',
  },
  navBtn: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4b6bfb',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};
