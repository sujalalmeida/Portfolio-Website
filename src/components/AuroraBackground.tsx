import { motion } from 'framer-motion';

const AuroraBackground = () => {
  const blobs = [
    {
      id: 1,
      size: 'w-96 h-96',
      position: 'top-10 left-10',
      gradient: 'bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30',
      animation: { duration: 20, delay: 0 }
    },
    {
      id: 2,
      size: 'w-80 h-80',
      position: 'top-1/3 right-20',
      gradient: 'bg-gradient-to-br from-emerald-400/25 via-cyan-400/20 to-primary/35',
      animation: { duration: 15, delay: 5 }
    },
    {
      id: 3,
      size: 'w-72 h-72',
      position: 'bottom-20 left-1/4',
      gradient: 'bg-gradient-to-br from-purple-400/20 via-primary/30 to-pink-400/25',
      animation: { duration: 18, delay: 10 }
    },
    {
      id: 4,
      size: 'w-60 h-60',
      position: 'bottom-1/3 right-1/3',
      gradient: 'bg-gradient-to-br from-blue-400/20 via-primary/25 to-emerald-400/30',
      animation: { duration: 22, delay: 3 }
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} ${blob.position} ${blob.gradient} rounded-full blur-3xl opacity-60`}
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
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
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