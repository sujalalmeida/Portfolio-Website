import { ReactNode } from 'react';
import { useTilt } from '@/hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TiltCard = ({ children, className = '', style = {} }: TiltCardProps) => {
  const { ref, transform, transition, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
        transition,
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
