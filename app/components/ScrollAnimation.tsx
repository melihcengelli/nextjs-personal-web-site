'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  isTitle?: boolean;
}

export function ScrollAnimation({ children, isTitle = false }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 group ${
        isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      }`}
      data-visible={isVisible}
    >
      {children}
    </div>
  );
} 