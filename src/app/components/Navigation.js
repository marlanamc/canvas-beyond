import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-purple-800 hover:text-purple-600 font-semibold">
            Canvas & Beyond
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-purple-800 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-purple-800 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-purple-800 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 