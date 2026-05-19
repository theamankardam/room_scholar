import { useState } from "react";
import { useProperties } from "../hooks/useProperties";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import BookingModal from "./BookingModal"; // 👈 new modal

export default function FeaturedProperty({ popular }) {
  const { properties } = useProperties();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const limitedProperties = properties
    .filter((item) => item.isPopular === false)
    .slice(0, 4);

  const popularProperties = properties
    .filter((item) => item.isPopular === true)
    .slice(0, 4);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  return (
    <div className="px-10 xl:px-14 py-5">

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(popular ? popularProperties : limitedProperties).map(
          (property) => (
            <FeaturedPropertyCard
              key={property._id}
              {...property}
              onClick={() => handleCardClick(property)} // 👈 important
            />
          )
        )}
      </div>

      {/* Modal */}
      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        property={selectedProperty}
      />
    </div>
  );
}