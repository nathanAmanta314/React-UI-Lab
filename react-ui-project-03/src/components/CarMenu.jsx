import React from "react";
import CarCard from "./CarCard";

const CarMenu = ({ carData, onSelect, isTransitioning }) => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {carData.map((car, i) => (
          <CarCard
            key={i}
            {...car}
            onSelect={onSelect}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default CarMenu;
