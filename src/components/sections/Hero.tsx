'use client';

import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const videos = ['/videos/city.mp4', '/videos/waiting-room.mp4', '/videos/procedure-room.mp4'];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    // Play only the current video, pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          video.currentTime = 0; // Reset to beginning
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideo]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {videos.map((video, index) => (
        <video
          key={video}
          ref={(el) => { videoRefs.current[index] = el; }}
          muted
          onEnded={handleVideoEnd}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentVideo ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
      
      {/* Dark overlay to dim videos */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>
      
      {/* Subtle full-height fade with noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 80%, rgba(254,254,254,0.03) 0%, transparent 70%),
            radial-gradient(circle at 70% 85%, rgba(254,254,254,0.03) 0%, transparent 70%),
            radial-gradient(circle at 45% 90%, rgba(254,254,254,0.02) 0%, transparent 50%),
            linear-gradient(to bottom, 
              rgba(254,254,254,0) 0%, 
              rgba(254,254,254,0.005) 20%, 
              rgba(254,254,254,0.01) 35%, 
              rgba(254,254,254,0.03) 50%, 
              rgba(254,254,254,0.08) 65%, 
              rgba(254,254,254,0.20) 75%, 
              rgba(254,254,254,0.45) 85%, 
              rgba(254,254,254,0.75) 92%, 
              rgba(254,254,254,1) 100%
            )
          `,
          zIndex: 2
        }}
      ></div>
      
      {/* Laser RX Text on Glassmorphism Pane */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        textAlign: 'center',
        padding: '60px 80px',
        background: 'rgba(229, 190, 237, 0.12)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(229, 190, 237, 0.15)',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 className="font-young-serif text-space-cadet text-6xl md:text-7xl font-bold tracking-wide">
          Laser RX
        </h1>
        <p className="font-bagnard text-space-cadet text-lg md:text-xl mt-6 leading-relaxed">
          Your journey to confident, radiant skin starts here ✨
        </p>
        <p className="font-bagnard text-space-cadet/80 text-base md:text-lg mt-2 leading-relaxed">
          Safe, effective treatments designed just for you
        </p>
        <button 
          className="font-oswald text-natural-white bg-goldenrod hover:bg-yellow-600 px-10 py-4 mt-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open('tel:18109563272', '_self')}
        >
          Book Your Glow-Up! 💫
        </button>
      </div>
    </div>
  );
}
