"use client";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-gray-900 bg-gray-100'>
        {children}
      </body>
      
    </html>
  );
}
