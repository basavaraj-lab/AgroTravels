'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { mockRoutes, mockTrucks } from '@/data/mockData';
import { CheckCircle, Truck as TruckIcon, User, Phone, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ConfirmationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const bookingId = params.bookingId as string;
  
  const truckId = searchParams.get('truckId') as string;
  const routeId = searchParams.get('routeId') as string;
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const route = mockRoutes.find(r => r.id === routeId);
  const truck = mockTrucks.find(t => t.id === truckId);

  if (!route || !truck) return <div className="p-20 text-center font-bold">Invalid Details.</div>;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-2xl shadow-brand-100/50 border border-brand-100 overflow-hidden">
          <div className="bg-gradient-to-br from-brand-600 to-emerald-600 p-10 text-center text-white relative flex flex-col items-center">
            <CheckCircle size={80} className="mb-6 text-white drop-shadow-md" />
            <h1 className="text-4xl font-black mb-3 tracking-tight">Booking Confirmed!</h1>
            <p className="text-brand-100 font-medium text-lg max-w-md mx-auto">Your truck has been successfully secured for agricultural transport.</p>
            <div className="mt-8 inline-block bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 font-mono text-2xl font-black tracking-widest shadow-inner">
              ID: {bookingId}
            </div>
          </div>
          
          <div className="p-10">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Trip Summary</h3>
            <div className="flex justify-between items-center mb-8 bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
              <div className="text-center w-1/3">
                <p className="text-2xl font-black text-slate-800">{route.source.city}</p>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">{route.source.state}</p>
              </div>
              <div className="text-slate-300 w-1/3 flex justify-center">
                 <ArrowRight size={24}/>
              </div>
              <div className="text-center w-1/3">
                <p className="text-2xl font-black text-slate-800">{route.destination.city}</p>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">{route.destination.state}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                <div className="bg-brand-50 p-3 rounded-xl">
                  <TruckIcon className="text-brand-600" size={24} />
                </div>
                <div className="mt-1">
                  <p className="text-sm font-bold text-slate-800 leading-tight">{truck.name}</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{truck.type} • {truck.capacityTons} Tons</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                <div className="bg-brand-50 p-3 rounded-xl">
                  <Calendar className="text-brand-600" size={24} />
                </div>
                <div className="mt-1">
                  <p className="text-sm font-bold text-slate-800 leading-tight">Dispatch Time</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{truck.dispatchTime} ({truck.dispatchShift})</p>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Carrier Details</h3>
            <div className="bg-brand-50/50 border border-brand-100 rounded-2xl p-6 flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm border border-brand-200">
                  <User size={28} />
                </div>
                <div>
                  <p className="text-lg font-black text-slate-800">{truck.driverName}</p>
                  <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mt-1">Verified Partner</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-white border border-brand-200 text-brand-700 px-5 py-3 rounded-xl font-bold hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors shadow-sm">
                <Phone size={18} /> Call Driver
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className="flex-1 bg-brand-600 text-white font-black text-lg py-4 rounded-2xl text-center hover:bg-brand-700 hover:-translate-y-1 transition-all shadow-xl shadow-brand-200">
                Track Live Status
              </Link>
              <Link href="/" className="flex-1 bg-white border-2 border-slate-200 text-slate-700 font-black text-lg py-4 rounded-2xl text-center hover:border-slate-300 hover:bg-slate-50 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
