import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif text-slate-800 hover:text-slate-600">
              Canvas & Beyond by Heidi
            </Link>
          </div>
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
      </nav>
    </header>
  );
} 