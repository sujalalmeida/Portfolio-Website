import { useRef, useState, useCallback } from 'react';

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState('');
  const [transition, setTransition] = useState('');

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const tiltX = (0.5 - y) * 20; // Max tilt angle
    const tiltY = (x - 0.5) * 20;

    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`);
    setTransition('transform 0.1s ease-out');
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setTransition('transform 0.5s ease-out');
  }, []);

  return { ref, transform, transition, handleMouseMove, handleMouseLeave };
}
