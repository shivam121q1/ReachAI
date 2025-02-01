"use client";

import React, { useEffect, useState } from "react";

// Unsplash API for random images
const fetchUnsplashImages = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=3&client_id=bmB5yZ7iX6Fo-kZInlbb2c5myXFuk9NJ-bd8Ti2rPiY`
  );
  const data = await response.json();
  return data.map((img: any) => img.urls.regular);
};

const Portfolio = ({brandName,description}:any) => {
  const [unsplashImages, setUnsplashImages] = useState<string[]>([]);

  // Fetch Unsplash images when the component mounts
  useEffect(() => {
    const getImages = async () => {
      const images = await fetchUnsplashImages();
      setUnsplashImages(images);
    };
    getImages();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Header Section with Logo */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo (You can replace this with your logo image) */}
            <img
              src="https://via.placeholder.com/100x50?text=Logo"
              alt="Logo"
              className="w-24 h-auto"
            />
            <h1 className="text-4xl font-bold">{brandName}</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-white hover:underline">About</a></li>
              <li><a href="#skills" className="text-white hover:underline">Skills</a></li>
              <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
              <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">About Me</h2>
          <p className="text-lg mt-4 text-center">
           {description}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
            <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
              <img
                src="https://img.icons8.com/ios/452/javascript.png"
                alt="JavaScript"
                className="w-12 h-12"
              />
              <p className="text-xl mt-2">JavaScript</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
              <img
                src="https://img.icons8.com/ios/452/react.png"
                alt="React"
                className="w-12 h-12"
              />
              <p className="text-xl mt-2">React</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
              <img
                src="https://img.icons8.com/ios/452/node-js.png"
                alt="Node.js"
                className="w-12 h-12"
              />
              <p className="text-xl mt-2">Node.js</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
              <img
                src="https://img.icons8.com/ios/452/css3.png"
                alt="CSS3"
                className="w-12 h-12"
              />
              <p className="text-xl mt-2">CSS3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Project 1</h3>
              <p className="mt-2">
                A web application built using React and Node.js for a dynamic
                user experience.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Project 2</h3>
              <p className="mt-2">
                A responsive portfolio website designed with Tailwind CSS and
                JavaScript.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Project 3</h3>
              <p className="mt-2">
                A full-stack e-commerce site with a user-friendly design and
                payment system integration.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lorem Ipsum Section with Unsplash Images */}
      <section id="lorem" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Lorem Ipsum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {unsplashImages.map((image, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Lorem Ipsum ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Contact</h2>
          <form className="mt-8 max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Your Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
