import './globals.css';

export const metadata = {
  title: 'Zeeshan Ahmad Portfolio',
  description: 'Portfolio of Zeeshan Ahmad, Site Reliability Engineer',
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
