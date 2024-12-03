import './globals.css'
import { Dancing_Script } from 'next/font/google';
import { Inter } from 'next/font/google';


const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Canvas & Beyond by Heidi',
  description: 'Fine art and illustration services by Heidi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancing.variable}`}>
        {children}
      </body>
    </html>
  );
}
