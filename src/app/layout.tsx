import './globals.css'
import { Dancing_Script } from 'next/font/google';
import type { Metadata } from 'next';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

export const metadata: Metadata = {
  title: 'Canvas & Beyond',
  description: 'Art Portfolio by Heidi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
