import React from 'react';
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.name}</h1>
        <div className="flex items-center text-gray-600 space-x-4">
            <span className="flex items-center text-yellow-500 font-semibold">
                ★ {property.rating}
            </span>
            <span>•</span>
            <span>{property.address.city}, {property.address.country}</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl overflow-hidden mb-8 h-[400px] md:h-[500px]">
        {/* Main large image */}
        <div className="col-span-1 md:col-span-1 h-full">
            <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer" 
            />
        </div>
        {/* Secondary grid images (Using placeholders for demo) */}
        <div className="hidden md:grid grid-cols-2 gap-4 h-full">
            <div className="bg-gray-200 h-full w-full"></div>
            <div className="bg-gray-200 h-full w-full"></div>
            <div className="bg-gray-200 h-full w-full"></div>
            <div className="bg-gray-200 h-full w-full relative">
                <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
                    Show all photos
                </button>
            </div>
        </div>
      </div>

      {/* Main Content Grid: Description (Left) & Booking (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="md:col-span-2">
            {/* Description */}
            <div className="border-b pb-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="border-b pb-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                <ul className="grid grid-cols-2 gap-y-3">
                {property.category.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-3 text-green-500">✓</span> 
                    {amenity}
                    </li>
                ))}
                </ul>
            </div>

            {/* Reviews Section Component */}
            <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Column: Booking Section */}
        <div className="md:col-span-1">
            <BookingSection price={property.price} />
        </div>

      </div>
    </div>
  );
};

export default PropertyDetail;