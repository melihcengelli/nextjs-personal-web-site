'use client';

import { useState, useEffect } from 'react';

export function ExperienceTimer({ isEnglish }: { isEnglish: boolean }) {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2024-08-07T00:00:00');
    
    const calculateExperience = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setExperience({ years, months, days, hours, minutes, seconds });
    };

    calculateExperience();
    const timer = setInterval(calculateExperience, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-medium text-[#2563EB] mb-3">{isEnglish ? 'Software Experience' : 'Yazılım Deneyimi'}</h4>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <span className="text-2xl font-bold text-[#111827]">{experience.years}</span>
          <span className="text-sm text-gray-600">{isEnglish ? ' years' : ' yıl'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#111827]">{experience.months}</span>
          <span className="text-sm text-gray-600">{isEnglish ? ' months' : ' ay'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#111827]">{experience.days}</span>
          <span className="text-sm text-gray-600">{isEnglish ? ' days' : ' gün'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#111827]">{experience.hours}</span>
          <span className="text-sm text-gray-600">{isEnglish ? ' hours' : ' saat'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#111827]">{experience.minutes}</span>
          <span className="text-sm text-gray-600">{isEnglish ? ' minutes' : ' dakika'}</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#111827]">{experience.seconds}</span>
          <span className="text-sm text-gray-600">{isEnglish ? ' seconds' : ' saniye'}</span>
        </div>
      </div>
    </div>
  );
} 