// User Types
export interface User {
  id: string;
  phone: string;
  name: string;
  email?: string;
  role: 'customer' | 'driver' | 'business';
  avatar?: string;
  points: number;
  level: string;
  createdAt: string;
}

// Address Types
export interface Address {
  id: string;
  code: string;
  latitude: number;
  longitude: number;
  description?: string;
  region: string;
  visibility: 'public' | 'shared' | 'private';
  ownerId: string;
  trustScore: number;
  confirmed: boolean;
  createdAt: string;
}

// Delivery Types
export type DeliveryStatus = 
  | 'pending' 
  | 'accepted' 
  | 'picked_up' 
  | 'in_transit' 
  | 'near_destination'
  | 'delivered' 
  | 'failed' 
  | 'cancelled';

export interface Delivery {
  id: string;
  trackingCode: string;
  senderId: string;
  receiverId?: string;
  driverId?: string;
  originCode?: string;
  destinationCode: string;
  status: DeliveryStatus;
  packageSize: 'small' | 'medium' | 'large' | 'extra_large';
  notes?: string;
  estimatedCost: number;
  actualCost?: number;
  scheduledAt?: string;
  pickedUpAt?: string;
  deliveredAt?: string;
  proofPhoto?: string;
  createdAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}