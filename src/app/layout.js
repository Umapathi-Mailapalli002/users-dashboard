"use client";
import './globals.css';
import { Navbar } from '@/components';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-gray-900 bg-gray-100'>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
