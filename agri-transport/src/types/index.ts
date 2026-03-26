export interface Location {
  state: string;
  city: string;
}

export interface Route {
  id: string;
  source: Location;
  destination: Location;
  distanceKm: number;
  travelTimeHours: number;
  dailyAvailability: boolean;
}

export type TruckType = 'Mini Truck' | 'Medium Truck' | 'Full Truck' | 'Cold Storage Truck';
export type DispatchTimeShift = 'Morning' | 'Afternoon' | 'Night';

export interface Truck {
  id: string;
  routeId: string;
  name: string;
  type: TruckType;
  capacityTons: number;
  basePrice: number;
  distancePricePerKm: number;
  dispatchShift: DispatchTimeShift;
  dispatchTime: string;
  estimatedDeliveryText: string;
  rating: number;
  driverName: string;
  driverPhone: string;
}

export interface Booking {
  id: string;
  truckId: string;
  routeId: string;
  cropType: string;
  quantityTons: number;
  totalPrice: number;
  status: 'Confirmed' | 'On the way' | 'Reached checkpoint' | 'Delivered';
  driverName: string;
  driverPhone: string;
  bookingDate: string;
  dispatchDate: string;
  pickupLocation: Location;
  destinationLocation: Location;
}
