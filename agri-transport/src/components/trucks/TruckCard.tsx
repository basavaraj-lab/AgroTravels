import React from 'react';
import Link from 'next/link';
import { Truck } from '@/types';
import { Star, ShieldCheck, Clock, Navigation } from 'lucide-react';

interface TruckCardProps {
  truck: Truck;
  routeId: string;
  searchParams: Record<string, string>;
}

export default function TruckCard({ truck, routeId, searchParams }: TruckCardProps) {
  const isColdStorage = truck.type === 'Cold Storage Truck';
  
  // Base formatting for price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const bookingUrl = `/booking/${routeId}/${truck.id}?date=${searchParams.date}&cropType=${searchParams.cropType}&quantity=${searchParams.quantity}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-brand-200 transition-all overflow-hidden flex flex-col md:flex-row group">
      {/* Left side info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                {truck.name}
                {isColdStorage && (
                  <span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full font-bold border border-blue-200 shadow-sm uppercase tracking-wide">
                    ❄️ AC/Cold
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap items-center text-slate-500 font-medium text-sm gap-2 mt-1.5">
                <span className="flex items-center text-amber-600 font-bold bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-xs">
                  <Star size={12} className="fill-amber-500 mr-1" /> {truck.rating}
                </span>
                <span className="text-slate-300 hidden md:inline">•</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-bold border border-slate-200">
                  {truck.type}
                </span>
                <span className="text-slate-300 hidden md:inline">•</span>
                <span className="text-xs font-semibold">{truck.capacityTons} Tons Capacity</span>
              </div>
            </div>
            <div className="text-left md:text-right flex flex-col items-start md:items-end mt-4 md:mt-0">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-0.5">Starting From</span>
              <span className="text-2xl font-black text-brand-700 leading-none">{formatPrice(truck.basePrice)}</span>
              <span className="text-[10px] text-slate-500 font-semibold mt-1">+ {formatPrice(truck.distancePricePerKm)}/km</span>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl group-hover:bg-brand-50/30 transition-colors">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock size={12}/> Dispatch
              </p>
              <p className="font-bold text-slate-800 text-base">{truck.dispatchTime}</p>
              <p className="text-[10px] text-brand-600 font-bold uppercase mt-0.5">{truck.dispatchShift}</p>
            </div>
            <div className="col-span-2 hidden md:flex items-center justify-center">
              <div className="w-full flex items-center max-w-[200px]">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-sm shadow-brand-200"></div>
                <div className="flex-1 border-t-[3px] border-dotted border-slate-300 relative group-hover:border-brand-300 transition-colors">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-full border border-slate-200 shadow-sm text-[9px] font-bold text-slate-500 flex items-center gap-1 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors">
                    <Navigation size={10} className="text-brand-500" /> FAST
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-700 shadow-sm shadow-brand-300"></div>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center md:justify-end gap-1">
                Est. Delivery
              </p>
              <p className="font-bold text-slate-800 text-sm mt-1">{truck.estimatedDeliveryText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side CTA */}
      <div className="bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 p-6 flex flex-col justify-center items-center w-full md:w-64 gap-4 group-hover:bg-brand-50/50 transition-colors">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-brand-700 bg-white px-3 py-1.5 rounded-full shadow-sm border border-brand-100 w-full group-hover:border-brand-300 transition-colors">
          <ShieldCheck size={14} className="text-brand-600"/> Verified Carrier
        </div>
        <Link 
          href={bookingUrl}
          className="w-full bg-brand-600 text-white font-black text-sm uppercase tracking-wide py-3.5 px-4 rounded-xl shadow-md hover:shadow-xl hover:bg-brand-700 hover:-translate-y-0.5 transition-all text-center"
        >
          Book Truck
        </Link>
        <p className="text-[10px] text-slate-500 font-semibold text-center uppercase tracking-wider flex items-center gap-1">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Instant Confirmation
        </p>
      </div>
    </div>
  );
}
