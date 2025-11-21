import { ReactNode } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Magnetic = ({ children, className = '', onClick, style = {} }: MagneticProps) => {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </button>
  );
};

export default Magnetic;
