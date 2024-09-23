'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; 
import { usePathname } from 'next/navigation';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300';
  };

  return (
    <header className="bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          MyBlog
        </Link>

        <nav className="flex space-x-4">
          <Link href="/"  className={`text-lg font-medium ${isActive('/')}`}>
           
              Home
          
          </Link>
          <Link href="/posts" className={`text-lg font-medium ${isActive('/posts')}`}>
        
              Posts
        
          </Link>
        </nav>

        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
}
