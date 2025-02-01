"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { StaticImageData } from "next/image";

import { paletteItems } from "@/data/palatte";

const InputWithBadge = () => {
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(null); // To track the selected badge index
  const [options, setOptions] = useState<StaticImageData[]>([]); // State to store the selected images

  const handleBadgeClick = (index: number) => {
    setSelectedBadgeIndex(index); // Set the clicked badge as selected
    const selectedOptions = paletteItems[index]?.characteristics || []; // Safely access characteristics
    setOptions(selectedOptions); // Set the associated images to options
  };

  return (
    <div className="space-y-4 p-4">
      {/* Input Section */}
      <div className="text-lg font-semibold">Choose a Palatte Color</div>

      {/* Badges Section */}
      <div className="flex flex-wrap gap-2">
        {paletteItems.map((badge, index) => (
          <Badge
            key={index}
            variant={selectedBadgeIndex === index ? "default" : "secondary"} // Change appearance of selected badge
            className={`flex items-center gap-2 cursor-pointer ${
              selectedBadgeIndex === index ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleBadgeClick(index)} // Handle click
          >
            {badge.type}
          </Badge>
        ))}
      </div>

      {/* Options Section */}
      {selectedBadgeIndex !== null && options.length > 0 && (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {options.map((option, index) => (
              <div className="w-15 h-5" key={index}>
              <img
                key={index}
                src={option.src} // Render the image from StaticImageData
                alt={`option-${index}`}
                className="w-15 h-4 object-cover rounded"
              />
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default InputWithBadge;
