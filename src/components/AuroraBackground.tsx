import { motion } from 'framer-motion';
import './AuroraBackground.css';

const AuroraBackground = () => {
  const blobs = [
    {
      id: 1,
      className: 'blob-1',
      animation: { duration: 20, delay: 0 }
    },
    {
      id: 2,
      className: 'blob-2',
      animation: { duration: 15, delay: 5 }
    },
    {
      id: 3,
      className: 'blob-3',
      animation: { duration: 18, delay: 10 }
    },
    {
      id: 4,
      className: 'blob-4',
      animation: { duration: 22, delay: 3 }
    }
  ];

  return (
    <div className="aurora-container">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`aurora-blob ${blob.className}`}
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 100, -50, 0],
            y: [0, -80, 120, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: blob.animation.duration,
            delay: blob.animation.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional flowing particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AuroraBackground;