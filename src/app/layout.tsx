import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './globals.css';

const font = Karla({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Old Continentals',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${font.className}`}
        style={{ height: '100vh', width: '100vw' }}
      >
        {children}
      </body>
    </html>
  );
}
