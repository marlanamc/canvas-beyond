"use client"

import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function HouseIllustrations() {
  const examples = [
    'https://picsum.photos/seed/house1/800/600',
    'https://picsum.photos/seed/house2/800/600',
    'https://picsum.photos/seed/house3/800/600'
  ];

  const mediumOptions = [
    'Watercolor',
    'Pen and Ink',
    'Colored Pencil',
    'Digital',
    'Mixed Media'
  ];

  const sizeOptions = [
    '8x10 inches',
    '11x14 inches',
    '16x20 inches',
    '18x24 inches',
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
              House Illustrations
            </h1>
            <p className="text-xl text-slate-600 mt-4">
              Preserve memories of your cherished home
            </p>
          </div>

          {/* Gallery Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Example Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examples.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={img} alt={`Example ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Pricing</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md">
              <p className="text-slate-700 mb-4">
                Each house illustration is uniquely crafted to capture the character and details of your home.
                Prices vary based on size, medium, and complexity of architecture.
              </p>
              <p className="text-slate-700">
                Starting at $XXX for a standard house illustration.
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Request a Commission</h2>
            
            {/* Added Note Box */}
            <div className="bg-purple-50 border-l-4 border-purple-700 p-4 mb-6">
              <p className="text-slate-700">
                <span className="font-semibold">Note:</span> Please provide as many details as possible about your home. 
                Include any architectural features, special landscaping, or seasonal elements you'd like highlighted. 
                Multiple photos from different angles will help ensure all important details are captured in your 
                illustration.
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
                  House Photo Upload
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
                <p className="text-sm text-slate-500 mt-1">
                  Please provide clear photos of your house from different angles
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
                  placeholder="Tell me about any specific details or elements you'd like emphasized..."
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