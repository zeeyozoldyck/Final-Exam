import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CollageSection from './components/CollageSection';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  
  const section3Overlays = [
    {
      src: "/assets/Calendar-Di6DECMS.png",
      style: {
        width: '45%',
        top: '6%',
        right: '-12%',
        zIndex: 10
      }
    }
  ];

  const section4Overlays = [
    {
      src: "/assets/mentor-B86XxDnP.png",
      style: {
        width: '42%',
        top: '32%',
        right: '-15%',
        zIndex: 10
      }
    },
    {
      src: "/assets/task-Bh1x49sc.png",
      style: {
        width: '42%',
        bottom: '8%',
        right: '-15%',
        zIndex: 11
      }
    }
  ];

  const section5Overlays = [
    {
      src: "/assets/task-C8T5eFjE.png",
      style: {
        width: '45%',
        top: '15%',
        left: '-15%',
        zIndex: 10
      }
    },
    {
      src: "/assets/mentor-BtITNF3U.png",
      style: {
        width: '45%',
        bottom: '15%',
        left: '-15%',
        zIndex: 11
      }
    }
  ];

  return (
    <>
      <Header />
      <main>
        {}
        <Hero />

        {}
        <CollageSection />

        {}
        <FeatureSection 
          title="Chats for your distributed teams"
          description="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
          baseImage="/assets/mockup-BjJsnQjX.jpg"
          imageLeft={true}
          overlays={section3Overlays}
        />

        {}
        <FeatureSection 
          title="Choose how you want to work"
          description="In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
          baseImage="/assets/mockup-fvrTZ6lr.jpg"
          imageLeft={false}
          overlays={section4Overlays}
        />

        {}
        <FeatureSection 
          title="Move faster with your Team tools"
          description="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
          baseImage="/assets/Mockup-Bl7fUoZS.jpg"
          imageLeft={true}
          overlays={section5Overlays}
        />

        {}
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}