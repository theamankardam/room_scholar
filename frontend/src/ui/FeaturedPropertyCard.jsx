import { FaHeart, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function FeaturedPropertyCard({
  features,
  images,
  isPopular,
  location,
  pricePerWeek,
  rating,
  title,
  onClick
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={images[0]}
          alt="Property"
          className="h-60 w-full object-cover group-hover:scale-105 transition-all duration-500"
        />

        {isPopular && (
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
              Popular
            </span>
          </div>
        )}

        <button className="absolute top-4 right-4 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300">
          <FaHeart className="text-sm" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold text-[#0B1B3B]">{title}</h3>

        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <IoLocationOutline className="text-lg" />

          <p className="text-sm">{location}</p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <span className="text-3xl font-bold text-orange-500">
              £{pricePerWeek}
            </span>

            <span className="text-gray-500 ml-1">/ week</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <FaStar className="text-orange-400 text-sm" />

            <span className="text-sm font-medium">{rating}</span>

            <span className="text-gray-400 text-sm">
              ({Math.floor(128 * rating)})
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {features.map((feature) => (
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
