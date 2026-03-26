import React from 'react';
import SearchForm from '@/components/search/SearchForm';
import { Package, ShieldCheck, Map, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#052e16] text-white pb-36 pt-24 lg:pt-36 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* A textured pattern or abstract background could go here */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600 rounded-full blur-[120px] opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[100px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-200 font-bold text-sm">
            🌾 Emplyowering 10,000+ Indian Farmers
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            India's #1 Transport Network <br className="hidden md:block"/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-400">Agriculture</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-100/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Book full trucks online instantly. Transparent pricing, verified drivers, and guaranteed on-time delivery across states for your precious crops.
          </p>
        </div>
      </section>

      {/* Search Bar - overlaps hero and content */}
      <div className="px-4">
         <SearchForm />
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Why choose AgriTransport?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">We understand the urgency of agricultural logistics. Our platform ensures your harvest reaches the market fresh and on time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 text-center hover:shadow-xl hover:shadow-emerald-100 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-emerald-200 text-emerald-600 group-hover:scale-110 transition-transform">
                <Map size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Pan India Routes</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Access to over 10,000+ trucks operating across all major agricultural corridors seamlessly.</p>
            </div>
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 text-center hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Verified Carriers</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Every truck and driver undergoes strict KYC and quality checks for your ultimate peace of mind.</p>
            </div>
            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100 text-center hover:shadow-xl hover:shadow-amber-100 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-amber-200 text-amber-600 group-hover:scale-110 transition-transform">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Any Load Size</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">From 2-ton mini trucks to 15-ton full trucks and specialized cold storage units for perishables.</p>
            </div>
            <div className="bg-purple-50/50 p-8 rounded-3xl border border-purple-100 text-center hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-purple-200 text-purple-600 group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">On-Time Delivery</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Real-time tracking and strict SLA monitoring to ensure timely drop-offs directly to the mandis.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6 tracking-tight">Are you a Fleet Owner?</h2>
          <p className="mb-10 font-medium text-xl text-brand-100 leading-relaxed">Join our rapidly growing network and get assured agricultural loads year-round without endless idle time waiting at borders.</p>
          <button className="bg-white text-brand-800 font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all outline-none">
            Partner With Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
