'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypewriterText({ text, delay = 0, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setCurrentIndex(0);

    if (delay) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return <span className={className}>{displayText}</span>;
} 