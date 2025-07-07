'use client';

import { useEffect, useState } from 'react';
import Candle from '@/components/Candle';

const DobCountdownSection = () => {
  const dob = new Date('2000-07-04');
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const timeDiff = nextBirthday.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="text-center mt-10 animate-fade-in transition-opacity duration-1000">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
        📅 <span className="ml-2">Date of Birth: <span className="text-yellow-600">July 4, 2000</span></span>
      </h2>
      {showText && (
        <p className="text-lg text-gray-600 mt-2">
          ⏳ <span className="font-medium">{daysLeft} day(s)</span> left for your next birthday 🎂
        </p>
      )}
    </section>
    
  );
};

export default DobCountdownSection;
