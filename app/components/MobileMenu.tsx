'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  lang: string;
}

export function MobileMenu({ lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div 
        className={`absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href={`/${lang}#about`} onClick={closeMenu} className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
            {lang === 'tr' ? 'Hakkımda' : 'About'}
          </a>
          <a href={`/${lang}#experience`} onClick={closeMenu} className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
            {lang === 'tr' ? 'Deneyim' : 'Experience'}
          </a>
          <a href={`/${lang}#courses`} onClick={closeMenu} className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
            {lang === 'tr' ? 'Kurslar' : 'Courses'}
          </a>
          <a href={`/${lang}#projects`} onClick={closeMenu} className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
            {lang === 'tr' ? 'Projeler' : 'Projects'}
          </a>
          <a href={`/${lang}#contact`} onClick={closeMenu} className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
            {lang === 'tr' ? 'İletişim' : 'Contact'}
          </a>
        </div>
      </div>
    </>
  );
} 