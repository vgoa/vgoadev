'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Store latest mouse position without re-rendering
  const mouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          setPosition(mouse.current);
          rafId.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
};

export default Cursor;