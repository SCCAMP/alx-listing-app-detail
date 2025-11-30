import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    rating: 4.8,
    address: {
      city: "Seminyak",
      country: "Indonesia",
    },
    image: "/assets/villa.jpg", // Ensure you have an image in public/assets or use a placeholder URL
    description: "Experience luxury living in this stunning oceanfront villa. Perfect for families or groups of friends looking for a relaxing getaway.",
    category: ["Pool", "Wi-Fi", "Kitchen", "Free Parking", "Air Conditioning"],
    price: 250,
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        rating: 5,
        comment: "Amazing place! Highly recommended.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Jane Smith",
        rating: 4,
        comment: "Beautiful views, but the wifi was a bit slow.",
      },
    ],
  },
  // Add more properties if needed
];