// App.js
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Product from './Product';
import Footer from './Footer';

const App = ({brandName,description}:any) => {
  return (
    <div className="font-sans">
      <Header brandName={brandName} />
      <Banner description={description}/>
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Latest Products</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Product image="path/to/image1.jpg" name="Product 1" price="$100" />
          <Product image="path/to/image2.jpg" name="Product 2" price="$120" />
          <Product image="path/to/image3.jpg" name="Product 3" price="$90" />
          <Product image="path/to/image4.jpg" name="Product 4" price="$150" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
