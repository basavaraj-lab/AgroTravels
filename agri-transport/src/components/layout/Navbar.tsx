import Link from 'next/link';
import { Truck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-brand-600" />
            <span className="font-bold text-2xl text-brand-900 tracking-tight">AgriTransport</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <Link href="/dashboard" className="hover:text-brand-600 transition-colors">Dashboard</Link>
            <button className="bg-brand-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-brand-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
