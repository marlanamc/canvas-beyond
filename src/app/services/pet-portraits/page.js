"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function PetPortraits() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const examples = [
    '/pet-portraits/example1.jpg',
    '/pet-portraits/example2.jpg',
    '/pet-portraits/example3.jpg',
    '/pet-portraits/example4.jpg',
    '/pet-portraits/example5.jpg',
    '/pet-portraits/example6.jpg'
  ];

  const mediumOptions = [
    'Watercolor',
    'Oil',
    'Acrylic',
    'Digital',
    'Colored Pencil'
  ];

  const sizeOptions = [
    '8x10 inches',
    '11x14 inches',
    '16x20 inches',
    '24x36 inches',
    'Custom Size'
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Back Navigation */}
          <Link href="/" className="text-purple-800 hover:text-purple-600 mb-8 inline-block">
            ← Back to Home
          </Link>

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-800 to-violet-800 text-transparent bg-clip-text">
              Pet Portraits
            </h1>
            <p className="text-xl text-slate-600 mt-4">
              Capture the personality of your beloved pets
            </p>
          </div>

          {/* Gallery Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Example Works</h2>
            <div className="relative">
              {/* Left Arrow */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              {/* Scrollable Container */}
              <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 p-4 min-w-full">
                  {examples.map((img, index) => (
                    <div 
                      key={index} 
                      className="flex-none w-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <img 
                        src={img} 
                        alt={`Example ${index + 1}`} 
                        className="w-full h-[400px] object-contain bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Pricing</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md">
              <p className="text-slate-700 mb-4">
                Prices vary based on size, medium, and complexity. Contact me for a custom quote.
              </p>
              <p className="text-slate-700">
                Starting at $XXX for a single pet portrait.
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Request a Commission</h2>
            
            {/* Added Note Box */}
            <div className="bg-purple-50 border-l-4 border-purple-700 p-4 mb-6">
              <p className="text-slate-700">
                <span className="font-semibold">Note:</span> Please provide as many details as possible about your pet. 
                Include their personality traits, favorite expressions, and any special characteristics you'd like 
                emphasized. The more information and reference photos you share, the better I can capture your 
                pet's unique spirit.
              </p>
            </div>

            <form className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="medium" className="block text-sm font-medium text-slate-700 mb-1">
                  Preferred Medium
                </label>
                <select
                  id="medium"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select a medium</option>
                  {mediumOptions.map((medium) => (
                    <option key={medium} value={medium}>{medium}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-slate-700 mb-1">
                  Size
                </label>
                <select
                  id="size"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select a size</option>
                  {sizeOptions.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-slate-700 mb-1">
                  Pet Photo Upload
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
                <p className="text-sm text-slate-500 mt-1">
                  Please provide clear photos of your pet
                </p>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="details"
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Tell me about your pet and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-violet-700 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-violet-600 transition-colors"
              >
                Request Quote
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
} 