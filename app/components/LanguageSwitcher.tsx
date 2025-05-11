'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (locale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-5 w-5" />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer first:rounded-t-md last:rounded-b-md"
            onClick={() => switchLanguage('tr')}
          >
            Türkçe
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer first:rounded-t-md last:rounded-b-md"
            onClick={() => switchLanguage('en')}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
} 