export interface Address {
  city: string;
  country: string;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  description: string;
  category: string[]; // Amenities
  price: number;
  reviews: Review[];
}