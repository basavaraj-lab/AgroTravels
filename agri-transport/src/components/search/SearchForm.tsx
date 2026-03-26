'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Box, Truck as TruckIcon } from 'lucide-react';
import { mockRoutes } from '@/data/mockData';

export default function SearchForm() {
  const router = useRouter();
  
  // Extract unique states for dropdowns
  const states = Array.from(new Set(mockRoutes.flatMap(r => [r.source.state, r.destination.state]))).sort();

  const [sourceState, setSourceState] = useState('');
  const [destinationState, setDestinationState] = useState('');
  const [date, setDate] = useState('');
  const [cropType, setCropType] = useState('Wheat');
  const [quantity, setQuantity] = useState('10');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourceState || !destinationState) {
      alert("Please select source and destination states.");
      return;
    }
    
    // Find if route exists
    const route = mockRoutes.find(r => 
      r.source.state === sourceState && r.destination.state === destinationState
    );

    if (route) {
      router.push(`/search?routeId=${route.id}&date=${date}&cropType=${cropType}&quantity=${quantity}`);
    } else {
      alert("Sorry, no direct routes found between these states for demo purposes.");
    }
  };

  return (
    <div className="glass p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-5xl mx-auto -mt-16 md:-mt-24 relative z-10 border border-white/40">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-4">
        {/* Source */}
        <div className="flex-1 w-full bg-white rounded-xl border border-slate-200 flex items-center p-3 focus-within:ring-2 ring-brand-500 transition-shadow">
          <MapPin className="text-brand-500 mr-2" size={24} />
          <div className="flex flex-col flex-1">
            <label className="text-xs text-slate-500 font-semibold uppercase">From</label>
            <select 
              required
              className="bg-transparent text-slate-800 font-bold focus:outline-none appearance-none"
              value={sourceState}
              onChange={(e) => setSourceState(e.target.value)}
            >
              <option value="" disabled>Select State</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Destination */}
        <div className="flex-1 w-full bg-white rounded-xl border border-slate-200 flex items-center p-3 focus-within:ring-2 ring-brand-500 transition-shadow">
          <MapPin className="text-brand-600 mr-2" size={24} />
          <div className="flex flex-col flex-1">
            <label className="text-xs text-slate-500 font-semibold uppercase">To</label>
            <select 
              required
              className="bg-transparent text-slate-800 font-bold focus:outline-none appearance-none"
              value={destinationState}
              onChange={(e) => setDestinationState(e.target.value)}
            >
              <option value="" disabled>Select State</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="flex-1 w-full bg-white rounded-xl border border-slate-200 flex items-center p-3 focus-within:ring-2 ring-brand-500 transition-shadow">
          <Calendar className="text-slate-400 mr-2" size={24} />
          <div className="flex flex-col flex-1">
            <label className="text-xs text-slate-500 font-semibold uppercase">Dispatch Date</label>
            <input 
              required
              type="date" 
              className="bg-transparent text-slate-800 font-bold focus:outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Crop Details */}
        <div className="flex-1 w-full bg-white rounded-xl border border-slate-200 flex items-center p-3 focus-within:ring-2 ring-brand-500 transition-shadow">
          <Box className="text-amber-500 mr-2" size={24} />
          <div className="flex flex-col flex-1">
            <label className="text-xs text-slate-500 font-semibold uppercase">Crop & Qty</label>
            <div className="flex items-center">
              <input 
                required
                type="text" 
                placeholder="Wheat" 
                className="w-16 bg-transparent text-slate-800 font-bold focus:outline-none"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
              />
              <span className="text-slate-300 mx-1">|</span>
              <input 
                required
                type="number" 
                min="1"
                placeholder="10" 
                className="w-12 bg-transparent text-slate-800 font-bold focus:outline-none"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <span className="text-sm font-bold ml-1">Tons</span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto h-full">
          <button type="submit" className="w-full md:w-auto h-full min-h-[72px] bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
            <TruckIcon size={24} />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
