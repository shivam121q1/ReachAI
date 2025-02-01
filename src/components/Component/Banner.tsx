// Banner.js
import React from 'react';

const Banner = ({description}:any) => {
  return (
    <div className="relative bg-gray-700">
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('path/to/banner.jpg')" }}>
        <div>
          <h4 className="text-lg font-semibold">{description}</h4>
          <h2 className="text-4xl font-bold">New Collection</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
