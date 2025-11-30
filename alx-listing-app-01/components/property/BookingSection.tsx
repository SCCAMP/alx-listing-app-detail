import React, { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Simple logic to calculate nights (defaulting to 0 if invalid dates)
  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays > 0 ? diffDays * price : 0;
  };

  const total = calculateTotal();

  return (
    <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100 sticky top-24">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-2xl font-bold text-gray-900">${price}</h3>
        <span className="text-gray-500 mb-1">/night</span>
      </div>

      <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
            <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 transition" 
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
            <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 transition" 
            />
        </div>
      </div>

      {/* Total payment */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Total payment</span>
            <span className="text-xl font-bold text-gray-900">${total}</span>
        </div>
      </div>

      {/* Reserve button */}
      <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;