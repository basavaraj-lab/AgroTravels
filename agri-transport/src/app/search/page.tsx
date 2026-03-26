import React from 'react';
import { mockRoutes, mockTrucks } from '@/data/mockData';
import TruckCard from '@/components/trucks/TruckCard';
import { MapPin, ArrowRight, Calendar, Box, PackageX } from 'lucide-react';
import Link from 'next/link';

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const routeId = resolvedSearchParams.routeId as string;
  const date = resolvedSearchParams.date as string;
  const cropType = resolvedSearchParams.cropType as string;
  const quantity = resolvedSearchParams.quantity as string;

  const route = mockRoutes.find(r => r.id === routeId);
  const trucksForRoute = mockTrucks.filter(t => t.routeId === routeId);

  if (!route) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-brand-50 w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <PackageX size={40} className="text-brand-400" />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-4">Route Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">We couldn't find any direct routes matching your criteria. Try adjusting your search.</p>
        <Link href="/" className="bg-brand-600 text-white hover:bg-brand-700 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-brand-200">
          Modify Search
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Search Header */}
      <div className="bg-brand-950 pt-8 pb-16 text-white border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-4xl font-black flex items-center gap-4 mb-3 tracking-tight">
                <span>{route.source.city}, {route.source.state}</span>
                <span className="bg-brand-800 p-2 rounded-full"><ArrowRight size={20} className="text-brand-300" /></span>
                <span>{route.destination.city}, {route.destination.state}</span>
              </h1>
              <p className="text-brand-200 font-medium flex flex-wrap items-center gap-4 text-sm mt-4">
                <span className="flex items-center gap-2 bg-brand-900 shadow-inner px-4 py-1.5 rounded-full border border-brand-800/50"><Calendar size={16} className="text-brand-400"/> Dispatch: {date}</span>
                <span className="flex items-center gap-2 bg-brand-900 shadow-inner px-4 py-1.5 rounded-full border border-brand-800/50"><Box size={16} className="text-amber-400"/> {cropType} • {quantity} Tons</span>
                <span className="flex items-center gap-2 bg-brand-900 shadow-inner px-4 py-1.5 rounded-full border border-brand-800/50"><MapPin size={16} className="text-blue-400"/> {route.distanceKm} km Routing</span>
              </p>
            </div>
            <Link href="/" className="hidden md:inline-flex mt-6 md:mt-0 items-center justify-center bg-transparent hover:bg-brand-800 text-white px-8 py-3 rounded-full font-bold text-sm transition-colors border-2 border-brand-700">
              Modify Search
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200/60 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-800 text-lg">Filters</h3>
                <button className="text-xs font-bold text-brand-600 hover:text-brand-700">CLEAR ALL</button>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-xs text-slate-400 mb-4 uppercase tracking-widest">Truck Type</h4>
                <div className="space-y-3">
                  {['Mini Truck', 'Medium Truck', 'Full Truck', 'Cold Storage Truck'].map(type => (
                    <label key={type} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="relative flex items-center justify-center">
                          <input type="checkbox" className="peer w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 appearance-none border checked:bg-brand-600 checked:border-brand-600 transition-colors" defaultChecked />
                          <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm text-slate-700 font-semibold">{type}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-xs text-slate-400 mb-4 uppercase tracking-widest">Dispatch Shift</h4>
                <div className="space-y-3">
                  {['Morning', 'Afternoon', 'Night'].map(shift => (
                    <label key={shift} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="relative flex items-center justify-center">
                          <input type="checkbox" className="peer w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 appearance-none border checked:bg-brand-600 checked:border-brand-600 transition-colors" defaultChecked />
                          <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm text-slate-700 font-semibold">{shift} Dispatch</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1">
            <div className="bg-white px-6 py-5 rounded-t-2xl border border-slate-200 border-b-0 flex flex-col sm:flex-row justify-between items-center shadow-sm gap-4">
              <span className="font-bold text-slate-700 text-lg">{trucksForRoute.length} Total Trucks Available</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-400">Sort By:</span>
                <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer hover:bg-slate-100 transition-colors">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                  <option>Fastest Delivery</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {trucksForRoute.map(truck => (
                <TruckCard 
                  key={truck.id} 
                  truck={truck} 
                  routeId={routeId}
                  searchParams={{ date, cropType, quantity }}
                />
              ))}
              {trucksForRoute.length === 0 && (
                <div className="text-center py-20 bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0">
                  <PackageX size={48} className="mx-auto text-slate-300 mb-4" />
                  <h3 className="text-lg font-bold text-slate-700">No trucks matching criteria</h3>
                  <p className="text-slate-500 mt-2">Try removing some filters</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
