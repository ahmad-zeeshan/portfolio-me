// src/app/layout.js

import './globals.css';

export const metadata = {
  title: 'Zeeshan Ahmad Portfolio',
  description: 'Portfolio of Zeeshan Ahmad, Senior Site Reliability Engineer @ RELEX',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
