import { useEffect, useState } from 'react';

function AnimatedCursor() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ transform: `translate(${point.x - 90}px, ${point.y - 90}px)` }}
      aria-hidden="true"
    />
  );
}

export default AnimatedCursor;
