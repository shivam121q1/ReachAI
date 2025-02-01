
// Product.js
import React from 'react';

const Product = ({ image, name, price }:any) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default Product;
