'use client';

import React, { useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { mockRoutes, mockTrucks } from '@/data/mockData';
import BookingSummary from '@/components/booking/BookingSummary';
import { MapPin, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BookingPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const routeId = params.routeId as string;
  const truckId = params.truckId as string;
  
  const date = searchParams.get('date') || '';
  const cropType = searchParams.get('cropType') || '';
  const quantity = searchParams.get('quantity') || '';

  const route = mockRoutes.find(r => r.id === routeId);
  const truck = mockTrucks.find(t => t.id === truckId);

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!route || !truck) return <div className="p-20 text-center font-bold text-xl">Loading or Invalid Details...</div>;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedBookingId = 'BKG' + Math.floor(Math.random() * 1000000);
      router.push(`/confirmation/${generatedBookingId}?truckId=${truckId}&routeId=${routeId}&date=${date}&cropType=${cropType}&quantity=${quantity}`);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-800 mb-8 tracking-tight">Complete Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            
            {/* Route Summary */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Trip Details</h2>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 border border-brand-100">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-2xl font-black text-slate-800">
                    {route.source.city} <ArrowRight size={20} className="text-slate-300" /> {route.destination.city}
                  </div>
                  <p className="text-slate-500 font-medium mt-1">{route.distanceKm} km • {route.travelTimeHours} Hours journey calculated</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                 <div>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Dispatch Date</p>
                   <p className="font-bold text-slate-800">{date}</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Timing</p>
                   <p className="font-bold text-slate-800">{truck.dispatchTime}</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Cargo</p>
                   <p className="font-bold text-slate-800">{cropType}</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Quantity</p>
                   <p className="font-bold text-slate-800">{quantity} Tons</p>
                 </div>
              </div>
            </div>

            {/* User Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Farmer / Dispatcher Details</h2>
              <form id="booking-form" onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                      <input required type="text" placeholder="e.g. Ramesh Kumar" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Exact Pickup Address / Mandi</label>
                  <textarea required rows={2} placeholder="Enter exact loading point address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Exact Delivery Address</label>
                  <textarea required rows={2} placeholder="Enter exact unloading destination address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"></textarea>
                </div>
              </form>
            </div>
            
          </div>

          <div className="lg:col-span-1">
            <BookingSummary truck={truck} distanceKm={route.distanceKm} />
            <button 
              type="submit" 
              form="booking-form"
              disabled={isSubmitting}
              className="w-full mt-6 bg-brand-600 hover:bg-brand-700 text-white font-black tracking-wide uppercase text-lg py-5 px-6 rounded-2xl shadow-xl shadow-brand-200 transition-all flex justify-center items-center gap-2 disabled:bg-slate-400 disabled:shadow-none hover:-translate-y-1"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3"><div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div> Processing Payment...</span>
              ) : (
                <><CheckCircle2 size={24}/> Confirm & Pay</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
