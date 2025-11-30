import { Review } from "@/interfaces/index";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center mb-3">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm text-gray-600">{review.rating} stars</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;