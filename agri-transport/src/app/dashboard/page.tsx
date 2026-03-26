import React from 'react';
import { Truck, CheckCircle2, AlertCircle, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import TrackingStatus from '@/components/tracking/TrackingStatus';

// In a real app we'd fetch from DB. Using statics for presentation.
const userBookings = [
  {
    id: 'BKG847192',
    date: '24 Mar 2026',
    route: 'Bengaluru → Mumbai',
    status: 'On the way',
    crop: 'Tomatoes',
    quantity: '5 Tons',
    amount: '₹34,500',
    progress: 2
  },
  {
    id: 'BKG992812',
    date: '20 Mar 2026',
    route: 'Chennai → Kochi',
    status: 'Delivered',
    crop: 'Rice',
    quantity: '15 Tons',
    amount: '₹42,800',
    progress: 4
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-6 gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">My Dashboard</h1>
            <p className="text-slate-500 font-medium text-lg">Manage your bookings and track live logistics</p>
          </div>
          <Link href="/" className="flex items-center gap-2 bg-brand-600 text-white font-black px-8 py-4 rounded-xl shadow-xl shadow-brand-200 hover:bg-brand-700 hover:-translate-y-1 transition-all">
            <PlusCircle size={24} /> New Booking
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-5 mb-8 pb-8 border-b border-slate-100">
                <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-3xl font-black shadow-inner">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Ramesh Kumar</h3>
                  <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mt-1">Verified Farmer</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full text-left px-5 py-3.5 rounded-2xl bg-brand-50 text-brand-800 font-black tracking-wide border border-brand-200 transition-colors shadow-sm">Active Bookings</button>
                <button className="w-full text-left px-5 py-3.5 rounded-2xl text-slate-500 font-bold hover:bg-slate-100 transition-colors">Past Bookings</button>
                <button className="w-full text-left px-5 py-3.5 rounded-2xl text-slate-500 font-bold hover:bg-slate-100 transition-colors">Digital Invoices</button>
                <button className="w-full text-left px-5 py-3.5 rounded-2xl text-slate-500 font-bold hover:bg-slate-100 transition-colors">24/7 Support</button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl shadow-xl shadow-amber-200 p-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
               <AlertCircle className="mb-4 text-white drop-shadow-md" size={40} />
               <h4 className="text-2xl font-black mb-2 tracking-tight">Weather Alert</h4>
               <p className="text-sm font-medium leading-relaxed opacity-90">Light rain expected in Maharashtra tomorrow. All crops in transit are secured in waterproof trucks.</p>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">Recent Shipments</h2>
            
            {userBookings.map((bkg) => (
              <div key={bkg.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-slate-100 gap-4">
                  <div>
                    <div className="flex items-center flex-wrap gap-4 mb-2">
                      <span className="text-2xl font-black text-slate-800 tracking-tight">{bkg.route}</span>
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm ${bkg.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-brand-50 text-brand-700 border-brand-200'}`}>
                        {bkg.status}
                      </span>
                    </div>
                    <p className="font-bold text-slate-400 text-sm">Booking ID: {bkg.id} &nbsp;|&nbsp; Booked on {bkg.date}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-3xl font-black text-slate-800">{bkg.amount}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Paid</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 mb-8 flex flex-wrap gap-12">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Cargo Type</p>
                    <p className="text-lg font-bold text-slate-800">{bkg.crop}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Quantity</p>
                    <p className="text-lg font-bold text-slate-800">{bkg.quantity}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Vehicle Type</p>
                    <p className="text-lg font-bold text-slate-800 items-center flex gap-2"><Truck size={20} className="text-brand-500" /> Full Truck</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mt-4 text-brand-600 font-bold hover:text-brand-700 cursor-pointer transition-colors bg-brand-50 px-4 py-2 rounded-xl">
                      <CheckCircle2 size={18} /> View Invoice
                    </div>
                  </div>
                </div>

                {/* Tracking Progress Bar Component usage */}
                <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-4 pt-2">Live Tracking Status</h4>
                  <TrackingStatus currentStep={bkg.progress} />
                </div>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
