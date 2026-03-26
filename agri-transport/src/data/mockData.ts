import { Route, Truck, TruckType, DispatchTimeShift } from '../types';

export const mockRoutes: Route[] = [
  { id: 'r1', source: { state: 'Karnataka', city: 'Bengaluru' }, destination: { state: 'Maharashtra', city: 'Mumbai' }, distanceKm: 980, travelTimeHours: 18, dailyAvailability: true },
  { id: 'r2', source: { state: 'Tamil Nadu', city: 'Chennai' }, destination: { state: 'Kerala', city: 'Kochi' }, distanceKm: 690, travelTimeHours: 12, dailyAvailability: true },
  { id: 'r3', source: { state: 'Punjab', city: 'Ludhiana' }, destination: { state: 'Delhi', city: 'New Delhi' }, distanceKm: 310, travelTimeHours: 6, dailyAvailability: true },
  { id: 'r4', source: { state: 'Andhra Pradesh', city: 'Vijayawada' }, destination: { state: 'Telangana', city: 'Hyderabad' }, distanceKm: 275, travelTimeHours: 5, dailyAvailability: true },
  { id: 'r5', source: { state: 'Karnataka', city: 'Belagavi' }, destination: { state: 'Delhi', city: 'New Delhi' }, distanceKm: 1750, travelTimeHours: 32, dailyAvailability: true },
  { id: 'r6', source: { state: 'Gujarat', city: 'Ahmedabad' }, destination: { state: 'Rajasthan', city: 'Jaipur' }, distanceKm: 680, travelTimeHours: 11, dailyAvailability: true },
  { id: 'r7', source: { state: 'Uttar Pradesh', city: 'Lucknow' }, destination: { state: 'Bihar', city: 'Patna' }, distanceKm: 540, travelTimeHours: 10, dailyAvailability: true },
  { id: 'r8', source: { state: 'West Bengal', city: 'Kolkata' }, destination: { state: 'Odisha', city: 'Bhubaneswar' }, distanceKm: 440, travelTimeHours: 9, dailyAvailability: true },
  { id: 'r9', source: { state: 'Madhya Pradesh', city: 'Indore' }, destination: { state: 'Maharashtra', city: 'Pune' }, distanceKm: 600, travelTimeHours: 11, dailyAvailability: true },
  { id: 'r10', source: { state: 'Haryana', city: 'Karnal' }, destination: { state: 'Punjab', city: 'Amritsar' }, distanceKm: 240, travelTimeHours: 4, dailyAvailability: true },
  { id: 'r11', source: { state: 'Karnataka', city: 'Mysuru' }, destination: { state: 'Tamil Nadu', city: 'Coimbatore' }, distanceKm: 200, travelTimeHours: 4, dailyAvailability: true },
  { id: 'r12', source: { state: 'Maharashtra', city: 'Nagpur' }, destination: { state: 'Telangana', city: 'Hyderabad' }, distanceKm: 500, travelTimeHours: 9, dailyAvailability: true },
  { id: 'r13', source: { state: 'Rajasthan', city: 'Jodhpur' }, destination: { state: 'Gujarat', city: 'Surat' }, distanceKm: 620, travelTimeHours: 11, dailyAvailability: true },
  { id: 'r14', source: { state: 'Assam', city: 'Guwahati' }, destination: { state: 'West Bengal', city: 'Siliguri' }, distanceKm: 470, travelTimeHours: 10, dailyAvailability: true },
  { id: 'r15', source: { state: 'Uttar Pradesh', city: 'Agra' }, destination: { state: 'Madhya Pradesh', city: 'Gwalior' }, distanceKm: 120, travelTimeHours: 2, dailyAvailability: true },
];

const truckTypes: TruckType[] = ['Mini Truck', 'Medium Truck', 'Full Truck', 'Cold Storage Truck'];
const shifts: DispatchTimeShift[] = ['Morning', 'Afternoon', 'Night'];

const generateTrucksForRoute = (route: Route): Truck[] => {
  const trucks: Truck[] = [];
  const numTrucks = Math.floor(Math.random() * 3) + 3; // 3 to 5 trucks per route

  for (let i = 0; i < numTrucks; i++) {
    const type = truckTypes[Math.floor(Math.random() * truckTypes.length)];
    const shift = shifts[i % 3]; // distribute shifts
    
    let capacity = 5;
    let basePrice = 2000;
    let distancePricePerKm = 15;
    
    switch (type) {
      case 'Mini Truck': capacity = 2; basePrice = 1000; distancePricePerKm = 18; break;
      case 'Medium Truck': capacity = 5; basePrice = 2000; distancePricePerKm = 22; break;
      case 'Full Truck': capacity = 15; basePrice = 4000; distancePricePerKm = 30; break;
      case 'Cold Storage Truck': capacity = 10; basePrice = 6000; distancePricePerKm = 40; break;
    }

    let dispatchTimeStr = '08:00 AM';
    let estimatedDeliveryText = 'Same Day Delivery';
    
    if (shift === 'Morning') dispatchTimeStr = '06:00 AM';
    if (shift === 'Afternoon') dispatchTimeStr = '02:00 PM';
    if (shift === 'Night') dispatchTimeStr = '10:00 PM';

    if (route.travelTimeHours > 24) {
      estimatedDeliveryText = 'Delivery in 2 Days';
    } else if (route.travelTimeHours > 12) {
      estimatedDeliveryText = 'Next Day Delivery';
    }

    trucks.push({
      id: `t_${route.id}_${i}`,
      routeId: route.id,
      name: `${type.split(' ')[0]} Transport Co.`,
      type,
      capacityTons: capacity,
      basePrice,
      distancePricePerKm,
      dispatchShift: shift,
      dispatchTime: dispatchTimeStr,
      estimatedDeliveryText,
      rating: +(Math.random() * (5 - 3.5) + 3.5).toFixed(1), // 3.5 to 5.0
      driverName: `Driver ${i + 1}`,
      driverPhone: '+91 9876543210'
    });
  }
  return trucks;
};

export const mockTrucks: Truck[] = mockRoutes.flatMap(route => generateTrucksForRoute(route));

// Basic Mock Booking storage in memory (will reset on app restart)
import { Booking } from '../types';
export const mockBookings: Booking[] = [];
