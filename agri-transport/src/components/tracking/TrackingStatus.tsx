import React from 'react';
import { PackageSearch, Truck as TruckIcon, MapPin, CheckCircle2 } from 'lucide-react';

// steps: 1: Confirmed, 2: On the way, 3: Reached checkpoint, 4: Delivered
export default function TrackingStatus({ currentStep }: { currentStep: number }) {
  const steps = [
    { label: 'Booking Confirmed', icon: PackageSearch },
    { label: 'On The Way', icon: TruckIcon },
    { label: 'Reached Checkpoint', icon: MapPin },
    { label: 'Delivered', icon: CheckCircle2 }
  ];

  return (
    <div className="relative pt-4 pb-2">
      {/* Background Line */}
      <div className="absolute top-10 left-12 right-12 h-1.5 bg-slate-100 rounded-full z-0 hidden md:block border border-slate-200 shadow-inner"></div>
      
      {/* Active Line */}
      <div 
        className="absolute top-10 left-12 h-1.5 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full z-0 hidden md:block transition-all duration-1000 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        style={{ width: `${Math.max(0, (currentStep - 1) * 33.33)}%` }}
      ></div>

      <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
        {steps.map((step, index) => {
          const isCompleted = index + 1 <= currentStep;
          const isCurrent = index + 1 === currentStep;
          const Icon = step.icon;

          return (
            <div key={step.label} className="flex md:flex-col items-center gap-5 md:gap-3 text-center flex-1">
              <div className={`
                w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 shadow-lg transition-all duration-500
                ${isCompleted ? "bg-brand-600 text-white border-white scale-110 shadow-brand-200" : "bg-slate-50 text-slate-300 border-slate-100"}
              `}>
                <Icon size={isCompleted ? 24 : 20} strokeWidth={isCompleted ? 2.5 : 2} />
              </div>
              <div className="text-left md:text-center w-full">
                <p className={`
                  font-bold text-sm tracking-wide transition-colors
                  ${isCompleted ? "text-slate-800" : "text-slate-400"}
                `}>{step.label}</p>
                {isCurrent && (
                  <p className="text-[10px] uppercase font-black text-brand-600 tracking-widest mt-1 md:mx-auto bg-brand-50 inline-block px-2 py-0.5 rounded-full border border-brand-100">
                    Current Status
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
