import React from 'react';
import { Truck } from '@/types';
import { IndianRupee } from 'lucide-react';

interface BookingSummaryProps {
  truck: Truck;
  distanceKm: number;
}

export default function BookingSummary({ truck, distanceKm }: BookingSummaryProps) {
  const distanceCost = truck.distancePricePerKm * distanceKm;
  const fuelCharge = Math.round(distanceCost * 0.15); // 15% fuel surcharge
  const serviceFee = 499;
  const platformDiscount = -200;
  const total = truck.basePrice + distanceCost + fuelCharge + serviceFee + platformDiscount;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-brand-100/50 border border-slate-200 p-8 sticky top-24">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
          <IndianRupee size={20} />
        </div>
        Payment Summary
      </h3>
      
      <div className="space-y-4 text-sm font-medium">
        <div className="flex justify-between items-center text-slate-600">
          <span>Base Fare (<span className="font-bold text-slate-800">{truck.type}</span>)</span>
          <span className="font-bold text-slate-800">{formatPrice(truck.basePrice)}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span>Distance Fare ({distanceKm} km × ₹{truck.distancePricePerKm})</span>
          <span className="font-bold text-slate-800">{formatPrice(distanceCost)}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span>Fuel Surcharge & Tolls</span>
          <span className="font-bold text-slate-800">{formatPrice(fuelCharge)}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span>Platform Service Fee</span>
          <span className="font-bold text-slate-800">{formatPrice(serviceFee)}</span>
        </div>
        <div className="flex justify-between items-center text-green-600 bg-green-50 p-3 rounded-lg border border-green-100 mt-2">
          <span className="font-bold">AgriTransport Discount</span>
          <span className="font-bold">{formatPrice(platformDiscount)}</span>
        </div>
        
        <div className="flex justify-between items-center pt-6 pb-2 border-t border-slate-100 mt-4">
          <span className="text-lg font-black text-slate-800">Total Amount</span>
          <span className="text-3xl font-black text-brand-700">{formatPrice(total)}</span>
        </div>
        
        <p className="text-xs text-slate-400 text-center mt-6 font-medium leading-relaxed bg-brand-50 p-3 rounded-lg text-brand-800/70">
          By proceeding, you explicitly agree to our Terms & Conditions, Cancellation Policy, and Cargo Insurance terms.
        </p>
      </div>
    </div>
  );
}
